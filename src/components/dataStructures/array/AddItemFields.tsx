import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import InputField from "../../InputField"

interface AddItemFieldsProps {
    valueInput: string 
    indexInput: string 
    executingOperation: boolean
    errors: FormDataError
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AddItemFields = ({ 
        valueInput, 
        indexInput, 
        executingOperation, 
        errors, 
        handleInputChange 
    }: AddItemFieldsProps) => {
        
    return (
        <>
            <InputField 
                id="item-val"
                value={valueInput} 
                label='Value'
                disabled={executingOperation}
                type="number"
                handleChange={handleInputChange} 
                error={errors['item-val']} />
            <InputField 
                id="item-position"
                value={indexInput}
                label='Position'
                disabled={executingOperation}
                type="number"
                handleChange={handleInputChange}
                error={errors['item-position']} />
        </>
    )
}

export default AddItemFields