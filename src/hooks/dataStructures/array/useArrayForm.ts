import { ChangeEvent, useState } from "react"
import { FormDataError } from "../../../core/generalTypes"
import InputValidator from "../../../validators/InputValidator"
import useFormErrorsHandler from "../../useFormErrorsHandler"

interface UseArrayFormProps {
    
}

const useArrayForm = ({}: UseArrayFormProps) => {
    const [ errors, setErrors ] = useState<FormDataError>({})
    const { handleSingleError } = useFormErrorsHandler({ errors, setErrors })

    const handleReset = () => {
        setDataArray(initialState.data.map(item => { return {...item} }))
        setActionValue(initialState.value)
        setLowLimit(initialState.lowVal)
        setHighLimit(initialState.highVal)
        setOperation(initialState.operation)
        setFactor(initialState.factor)
        setActionIndex(initialState.index)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isValidInput = InputValidator.isValidNumber(e.target.value)
        const error = isValidInput? null : { message: 'Only numbers are allowed.'}

        if (e.target.id === 'item-val') {
            if (!error) setActionValue(parseInt(e.target.value))
            
            setInputItemVal(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }

        if (e.target.id === 'item-position') {
            if (!error) setActionIndex(parseInt(e.target.value))
            
            setInputIndex(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'factor-val') {
            if (!error) setFactor(parseInt(e.target.value))

            setFactorValInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'low-val') {
            if (!error) setLowLimit(parseInt(e.target.value))

            setLowValInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'high-val') {
            if (!error) setHighLimit(parseInt(e.target.value))

            setHighValInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }

        if (e.target.id === 'low-check') setIncludeLow(e.target.checked)

        if (e.target.id === 'high-check') setIncludeHigh(e.target.checked)
    }

    return {
        handleInputChange
    }
}

export default useArrayForm