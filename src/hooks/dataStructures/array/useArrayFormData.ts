import { useState } from 'react'
import { ArrayOperation } from "../../../core/dataStructures/ArrayDS"
import { FormDataError } from '../../../core/generalTypes'

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

const useArrayFormData = () => {
    // Form Data integers
    const [ operation, setOperation ] = useState<ArrayOperation>(null)
    const [ executingOperation, setExecutingOperation ] = useState(false)
    const [ factor, setFactor ] = useState(initialFormData.factor)
    const [ lowLimit, setLowLimit ] = useState(initialFormData.lowLimit)
    const [ highLimit, setHighLimit ] = useState(initialFormData.highLimit)
    const [ errors, setErrors ] = useState<FormDataError>({})

    // Form Data strings
    const [ indexInput, setIndexInput ] = useState(initialFormData.indexInput)
    const [ valueInput, setValueInput ] = useState(initialFormData.valueInput)
    const [ factorInput, setFactorInput ] = useState(initialFormData.factorInput)
    const [ lowLimitInput, setLowLimitInput ] = useState(initialFormData.lowLimitInput)
    const [ includeLowLimit, setIncludeLowLimit ] = useState(initialFormData.includeLowLimit)
    const [ highLimitInput, setHighLimitInput ] = useState(initialFormData.highLimitInput)
    const [ includeHighLimit, setIncludeHighLimit ] = useState(initialFormData.includeHighLimit)

    return {
        initialFormData,
        operation, setOperation,
        executingOperation, setExecutingOperation,
        factor, setFactor,
        lowLimit, setLowLimit,
        highLimit, setHighLimit,
        indexInput, setIndexInput,
        valueInput, setValueInput,
        factorInput, setFactorInput,
        lowLimitInput, setLowLimitInput,
        includeLowLimit, setIncludeLowLimit,
        highLimitInput, setHighLimitInput,
        includeHighLimit, setIncludeHighLimit,
        errors, setErrors
    }
}

export default useArrayFormData