import { ChangeEvent } from "react"

interface InputProps {
    id: string 
    value: string 
    type: 'text' | 'number'
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ id, value, type, handleChange }: InputProps) => {
    return (
        <input 
            onChange={handleChange}
            className={type === 'text'? 'input-text' : 'input-number'} 
            id={id}
            value={value} 
            type={type} />
    )
}

export default Input