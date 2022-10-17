import { FieldError } from "../core/generalTypes"

interface FieldErrorInfoProps {
    error: FieldError
}

const FieldErrorInfo = ({ error }: FieldErrorInfoProps) => {
    return (
        <div className="error-info-container">
            <p className="error-info"></p>
        </div>
    )
}

export default FieldErrorInfo