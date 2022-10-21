import InputCheck from "./InputCheck"
import Label from "./Label"

const InputPackField = () => {
    return (
        <div className="input-field-container">
            <div className="input-field">
                <Label />
                <div className="input-pack-container">
                    <Input />
                    <InputCheck />
                </div>
            </div>
            { errors['high-val'] && <FieldErrorInfo error={errors['high-val']} />}
        </div>
    )
}

export default InputPackField