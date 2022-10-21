interface LabelProps {
    inputId: string
    text: string
}

const Label = ({ inputId, text }: LabelProps) => {
    return (
        <label className="input-label" htmlFor={inputId}>{text}</label>
    )
}

export default Label