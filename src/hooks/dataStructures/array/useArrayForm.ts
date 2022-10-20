import { useState, ChangeEvent } from "react"
import { ArrayOperation } from "../../../core/dataStructures/ArrayDS"
import { FormDataError } from "../../../core/generalTypes"
import InputValidator from "../../../validators/InputValidator"
import useFormErrorsHandler from "../../useFormErrorsHandler"
import useArrayData from "./useArrayData"

interface InitialArrayFormData {
    factor: number 
    lowLimit: number 
    highLimit: number
    indexInput: string
    valueInput: string
    factorInput: string 
    lowLimitInput: string 
    highLimitInput: string 
    includeLowLimit: boolean
    includeHighLimit: boolean
}

const initialFormData: InitialArrayFormData = {
    factor: 2,
    lowLimit: 0, 
    highLimit: 5,
    indexInput: '0',
    valueInput: '0',
    factorInput: '2',
    lowLimitInput: '0',
    highLimitInput: '10',
    includeLowLimit: true,
    includeHighLimit: true
}

const useArrayForm = () => {
    const {
        dataArray, setDataArray,
        actionValue, setActionValue,
        actionIndex, setActionIndex,
        initialState} = useArrayData()

    const [ operation, setOperation ] = useState<ArrayOperation>(null)
    const [ executingOperation, setExecutingOperation ] = useState(false)
    const [ factor, setFactor ] = useState(initialFormData.factor)
    const [ lowLimit, setLowLimit ] = useState(initialFormData.lowLimit)
    const [ highLimit, setHighLimit ] = useState(initialFormData.highLimit)
    const [ errors, setErrors ] = useState<FormDataError>({})

    const [ indexInput, setIndexInput ] = useState(initialFormData.indexInput)
    const [ valueInput, setValueInput ] = useState(initialFormData.valueInput)
    const [ factorInput, setFactorInput ] = useState(initialFormData.factorInput)
    const [ lowLimitInput, setLowLimitInput ] = useState(initialFormData.lowLimitInput)
    const [ includeLowLimit, setIncludeLowLimit ] = useState(initialFormData.includeLowLimit)
    const [ highLimitInput, setHighLimitInput ] = useState(initialFormData.highLimitInput)
    const [ includeHighLimit, setIncludeHighLimit ] = useState(initialFormData.includeHighLimit)

    const { handleSingleError } = useFormErrorsHandler({ errors, setErrors })

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
        handleInputChange
    }
}

export default useArrayForm