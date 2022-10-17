import { FieldError, FormDataError } from "../core/generalTypes"

interface ErrorData {
    field: string 
    error: FieldError | null
}

interface FormErrorsHandlerProps {
    errors: FormDataError
    setErrors: React.Dispatch<React.SetStateAction<FormDataError>>
}

const useFormErrorsHandler = ({ errors, setErrors }: FormErrorsHandlerProps) => {
    const handleSingleError = ({ field, error }: ErrorData) => {
        if (error) errors[field] = error
        else delete errors[field]

        setErrors(errors)
    }

    return {
        handleSingleError
    }
}

export default useFormErrorsHandler