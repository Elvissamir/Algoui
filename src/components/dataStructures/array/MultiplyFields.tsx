import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import InputField from "../../InputField"

interface MultiplyFieldsProps {
    factorInput: string
    executingOperation: boolean 
    errors: FormDataError
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MultiplyFields = ({ factorInput, executingOperation, errors, handleInputChange }: MultiplyFieldsProps) => {
    return (
        <InputField 
            id="factor-val" 
            value={factorInput} 
            disabled={executingOperation}
            label='Factor'
            type="number" 
            handleChange={handleInputChange} 
            error={errors['factor-val']} />
    )
}

export default MultiplyFields