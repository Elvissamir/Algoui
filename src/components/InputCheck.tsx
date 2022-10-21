import { ChangeEvent } from "react"

interface InputCheckProps {
    id: string 
    name: string 
    checked: boolean
    handleChange: (e: ChangeEvent<HTMLInputElement>) =>  void
}

const InputCheck = ({ id, name, checked, handleChange }: InputCheckProps) => {
    return (
        <input 
            id={id}
            onChange={handleChange}
            className="input-check" 
            type="checkbox" 
            checked={checked}
            name={name} />
    )
}

export default InputCheck