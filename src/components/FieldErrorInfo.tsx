import FieldErrorIcon from "./icons/FieldErrorIcon"
import { FieldError } from "../core/generalTypes"

interface FieldErrorInfoProps {
    error: FieldError
}

const FieldErrorInfo = ({ error }: FieldErrorInfoProps) => {
    return (
        <div className="error-info-container">
            <FieldErrorIcon />
            <p className="error-info">{error.message}</p>
        </div>
    )
}

export default FieldErrorInfo