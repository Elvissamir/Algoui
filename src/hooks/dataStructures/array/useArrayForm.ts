import { useAnimationControls } from "framer-motion"
import { ChangeEvent } from "react"
import InputValidator from "../../../validators/InputValidator"
import useFormErrorsHandler from "../../useFormErrorsHandler"
import useAddToEndAction from "./actions/useAddToEndAction"
import useAddToPositionAction from "./actions/useAddToPositionAction"
import useAddToStartAction from "./actions/useAddToStartAction"
import useFilterAction from "./actions/useFilterAction"
import useIntroAction from "./actions/useIntroAction"
import useMultiplyAction from "./actions/useMultiplyAction"
import useRemoveFromEndAction from "./actions/useRemoveFromEndAction"
import useRemoveFromPositionAction from "./actions/useRemoveFromPositionAction"
import useRemoveFromStartAction from "./actions/useRemoveFromStartAction"
import useSimpleSortAction from "./actions/useSimpleSortAction"
import useArrayData from "./useArrayData"
import useArrayFormData from "./useArrayFormData"

export interface ArrayFormControlHandlers {
    handleAddToStart: () => void
    handleAddToEnd: () => void
    handleAddToPosition: () => void
    handleRemoveFromPosition: () => void 
    handleRemoveFromStart: () => void
    handleRemoveFromEnd: () => void
    handleSortIncreasing: () => void
    handleSortDecreasing: () => void
    handleFilter: () => void
    handleMultiply: () => void
}

const useArrayForm = () => {
    const {
        dataArray, setDataArray,
        actionValue, setActionValue,
        actionIndex, setActionIndex,
        initialState} = useArrayData()

    const {
        initialFormData,
        operation, setOperation,
        executingOperation, setExecutingOperation,
        lowLimit, setLowLimit,
        lowLimitInput, setLowLimitInput,
        highLimitInput, setHighLimitInput, 
        highLimit, setHighLimit,
        valueInput, setValueInput,
        indexInput, setIndexInput,
        includeLowLimit, setIncludeLowLimit,
        includeHighLimit, setIncludeHighLimit,
        factorInput, setFactorInput,
        factor, setFactor,
        errors, setErrors
    } = useArrayFormData()

    const { handleSingleError } = useFormErrorsHandler({ errors, setErrors })
    const controls = useAnimationControls()

    const afterAction = () => {
        if (InputValidator.isValidNumber(indexInput)) setActionIndex(parseInt(indexInput))
        
        setExecutingOperation(false)
        setOperation(null)
    } 

    // ACTIONS 
    useIntroAction({ dataArray, afterAction, operation, controls })

    const { handleAddToStart } = useAddToStartAction({ 
        dataArray, setDataArray, 
        actionValue, 
        actionIndex, setActionIndex, 
        operation, setOperation,
        controls, 
        afterAction 
    })

    const { handleAddToEnd } = useAddToEndAction({ 
        dataArray, setDataArray, 
        actionIndex, setActionIndex, 
        actionValue, 
        controls,
        operation, setOperation, 
        afterAction, 
    })

    const { handleAddToPosition } = useAddToPositionAction({
        dataArray, setDataArray,
        actionIndex, setActionIndex,
        actionValue, 
        operation, setOperation,
        handleAddToStart, handleAddToEnd,
        controls, afterAction
    })

    const { handleFilter } = useFilterAction({ 
        dataArray, setDataArray, 
        operation, setOperation,
        actionIndex, setActionIndex,
        lowLimit, highLimit,
        includeLowLimit, includeHighLimit,
        afterAction, controls, 
        setExecutingOperation
    })
    const { handleMultiply } = useMultiplyAction({
        dataArray, setDataArray,
        actionIndex, setActionIndex, 
        operation, setOperation,
        executingOperation, setExecutingOperation,
        controls, factor, afterAction
    })

    const { handleRemoveFromStart } = useRemoveFromStartAction({ 
        dataArray, setDataArray, 
        setOperation, controls, 
        afterAction,
    })

    const { handleRemoveFromPosition } = useRemoveFromPositionAction({ 
        dataArray, setDataArray, 
        controls, actionIndex, 
        setOperation, afterAction,
    })

    const { handleRemoveFromEnd } = useRemoveFromEndAction({ 
        dataArray, setDataArray, 
        setOperation, controls, afterAction,
    })

    const { handleSortDecreasing, handleSortIncreasing } = useSimpleSortAction({ 
        dataArray, setDataArray, 
        setOperation, afterAction
    })
    
    const controlHandlers: ArrayFormControlHandlers = {
        handleAddToStart, handleAddToEnd, handleAddToPosition,
        handleRemoveFromStart, handleRemoveFromPosition, handleRemoveFromEnd,
        handleFilter, handleMultiply,
        handleSortDecreasing, handleSortIncreasing
    }
 
    const handleReset = async () => {
        await controls.stop()

        setDataArray(initialState.data.map(item => { return {...item} }))
        setActionIndex(initialState.index)
        setIndexInput(initialFormData.indexInput)
        setActionValue(initialState.value)
        setValueInput(initialFormData.valueInput)
        setLowLimit(initialFormData.lowLimit)
        setLowLimitInput(initialFormData.lowLimitInput)
        setHighLimit(initialFormData.highLimit)
        setHighLimitInput(initialFormData.highLimitInput)
        setFactor(initialFormData.factor)
        setFactorInput(initialFormData.factorInput)
        setOperation('intro')
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('input change', e.target.id)
        const isValidInput = InputValidator.isValidNumber(e.target.value)
        const error = isValidInput? null : { message: 'Only numbers are allowed.'}

        if (e.target.id === 'item-val') {
            if (!error) setActionValue(parseInt(e.target.value))
            
            setValueInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }

        if (e.target.id === 'item-position') {
            if (!error) setActionIndex(parseInt(e.target.value))
            
            setIndexInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'factor-val') {
            if (!error) setFactor(parseInt(e.target.value))

            setFactorInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'low-val') {
            if (!error) setLowLimit(parseInt(e.target.value))

            setLowLimitInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'high-val') {
            if (!error) setHighLimit(parseInt(e.target.value))

            setHighLimitInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }

        if (e.target.id === 'low-check') setIncludeLowLimit(e.target.checked)

        if (e.target.id === 'high-check') setIncludeHighLimit(e.target.checked)
    }

    return {
        dataArray,
        controls,
        indexInput,
        valueInput,
        operation,
        executingOperation,
        lowLimitInput,
        highLimitInput,
        includeHighLimit,
        includeLowLimit,
        factorInput,
        errors,
        controlHandlers,
        handleInputChange,
        handleReset,
    }
}

export default useArrayForm