import { ChangeEvent } from "react"
import InputValidator from "../../../validators/InputValidator"
import useFormErrorsHandler from "../../useFormErrorsHandler"
import useArrayData from "./useArrayData"
import useArrayFormData from "./useArrayFormData"

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
 
    // Handlers
    const handleReset = () => {
        setDataArray(initialState.data.map(item => { return {...item} }))
        setActionValue(initialState.value)
        setLowLimit(initialFormData.lowLimit)
        setHighLimit(initialFormData.highLimit)
        setOperation('intro')
        setFactor(initialFormData.factor)
        setActionIndex(initialState.index)
    }

    const restoreAfterAction = () => {
        if (InputValidator.isValidNumber(indexInput)) setActionIndex(parseInt(indexInput))
        
        setExecutingOperation(false)
    } 

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        actionIndex, 
        actionValue,
        executingOperation,
        lowLimitInput,
        highLimitInput,
        valueInput,
        includeHighLimit,
        includeLowLimit,
        factorInput,
        handleInputChange
    }
}

export default useArrayForm