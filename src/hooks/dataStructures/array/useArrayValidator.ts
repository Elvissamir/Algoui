import { ErrorData } from "../../useFormErrorsHandler"

interface UseArrayValidatorProps {
    dataArray: any[]
    handleSingleError: ({ field, error }: ErrorData) => void
}

const useArrayValidator = ({ dataArray, handleSingleError }: UseArrayValidatorProps) => {
    const validateArray = () => {
        if (dataArray.length === 0) {
            const message = 'Array is empty, add some items. :).'
            handleSingleError({ field: 'data', error: { message} })
            return false
        }

        handleSingleError({ field: 'data', error: null })
        return true
    }

    return {
        validateArray
    }
}

export default useArrayValidator