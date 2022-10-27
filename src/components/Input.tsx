import { ChangeEvent } from "react"

interface InputProps {
    id: string 
    value: string 
    disabled: boolean
    type: 'text' | 'number'
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ id, value, type, disabled, handleChange }: InputProps) => {
    const selectCss = () => {
        let css = ''
        if (type === 'number') css =  css+'input-number'
        else css = css+'input-text'

        return disabled? css+' input-disabled' : css
    }

    return (
        <input 
            onChange={handleChange}
            className={selectCss()} 
            id={id}
            value={value} 
            type={type} />
    )
}

export default Input