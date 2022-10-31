import { FieldError, FormDataError } from "../core/generalTypes"

export interface ErrorData {
    field: string 
    error: FieldError | null
}

interface FormErrorsHandlerProps {
    errors: FormDataError
    setErrors: React.Dispatch<React.SetStateAction<FormDataError>>
}

const useFormErrorsHandler = ({ errors, setErrors }: FormErrorsHandlerProps) => {
    const handleSingleError = ({ field, error }: ErrorData) => {
        const nerrors: FormDataError = {...errors}

        if (error) nerrors[field] = error
        else delete nerrors[field]

        setErrors(nerrors)
    }

    return {
        handleSingleError
    }
}

export default useFormErrorsHandler