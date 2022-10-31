import { useEffect } from 'react'
import { ArrayOperation } from '../../../core/dataStructures/ArrayDS'
import InputValidator from '../../../validators/InputValidator'

interface UseArrayAfterActionProps {
    dataArray: any[]
    indexInput: string
    validateArray: () => boolean
    setExecutingOperation: React.Dispatch<React.SetStateAction<boolean>>
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
}

const useArrayAfterAction = ({
    dataArray,
    indexInput, 
    setActionIndex,
    setExecutingOperation, 
    validateArray,
    setOperation
}: UseArrayAfterActionProps) => {
    const afterAction = () => {
        if (InputValidator.isValidNumber(indexInput)) setActionIndex(parseInt(indexInput))
   
        setExecutingOperation(false)
        setOperation(null)
    } 

    useEffect(() => {
        validateArray()
    }, [ dataArray ])

    return {
        afterAction
    }
}

export default useArrayAfterAction