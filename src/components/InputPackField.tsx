import { ChangeEvent } from "react"
import { FieldError } from "../core/generalTypes"
import FieldErrorInfo from "./FieldErrorInfo"
import Input from "./Input"
import InputCheck from "./InputCheck"
import Label from "./Label"

interface InputPackFieldProps {
    inputId: string 
    label : string 
    inputValue: string
    disabled: boolean
    inputType: 'text' | 'number'
    checkId: string
    checkName: string 
    checked: boolean
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: FieldError
}

const InputPackField = ({ inputId, inputValue, disabled, inputType, label, checkId, checkName, checked, error, handleChange }: InputPackFieldProps) => {
    return (
        <div className="input-field-container">
            <div className="input-field">
                <Label text={label} inputId={inputId} />
                <div className="input-pack-container">
                    <Input id={inputId} value={inputValue} disabled={disabled} type={inputType} handleChange={handleChange} />
                    <InputCheck id={checkId} name={checkName} checked={checked} handleChange={handleChange} />
                </div>
            </div>
            { error && <FieldErrorInfo error={error} />}
        </div>
    )
}

export default InputPackField