import { ChangeEvent } from "react"
import { FieldError } from "../core/generalTypes"
import FieldErrorInfo from "./FieldErrorInfo"
import Input from "./Input"
import Label from "./Label"

interface InputFieldProps {
    id: string 
    value: string
    label: string
    type: 'number' | 'text'
    error: FieldError
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({id, value, label, type, error, handleChange }: InputFieldProps) => {
    return (
        <div className="input-field-container">
            <div className="input-field">
                <Label inputId={id} text={label} />
                <Input id={id} value={value} type={type} handleChange={handleChange} />
            </div>
            { error && <FieldErrorInfo error={error} />}
        </div>
    )
}

export default InputField