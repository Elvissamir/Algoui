import FieldErrorIcon from "../assets/icons/FieldErrorIcon"
import { FieldError } from "../core/generalTypes"

interface FieldErrorInfoProps {
    error: FieldError
}

const FieldErrorInfo = ({ error }: FieldErrorInfoProps) => {
    return (
        <div className="error-info-container">
            { error && <>
                <FieldErrorIcon />
                <p className="error-info">{error.message}</p>
            </>}
        </div>
    )
}

export default FieldErrorInfo