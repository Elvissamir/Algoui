import { ChangeEvent } from "react"
import { FieldError } from "../core/generalTypes"
import FieldErrorInfo from "./FieldErrorInfo"
import Input from "./Input"
import Label from "./Label"

interface InputFieldProps {
    id: string 
    value: string
    label: string
    disabled: boolean
    type: 'number' | 'text'
    error: FieldError
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({id, value, disabled, label, type, error, handleChange }: InputFieldProps) => {
    return (
        <div className="input-field-container">
            <div className="input-field">
                <Label inputId={id} text={label} />
                <Input id={id} value={value} disabled={disabled} type={type} handleChange={handleChange} />
            </div>
            { error && <FieldErrorInfo error={error} />}
        </div>
    )
}

export default InputField