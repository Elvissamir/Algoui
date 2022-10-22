import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import { ArrayFormControlHandlers } from "../../../hooks/dataStructures/array/useArrayForm"
import ActionBtn from "../../ActionBtn"
import InputField from "../../InputField"

interface MultiplyControlsProps {
    factorInput: string 
    executingOperation: boolean
    errors: FormDataError
    handlers: ArrayFormControlHandlers
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MultiplyControls = ({ 
        factorInput, 
        executingOperation, 
        errors, 
        handlers, 
        handleInputChange
    }: MultiplyControlsProps) => {
        
    return (
        <div className="multiply-controls">
            <InputField 
                id="factor-val" 
                value={factorInput} 
                disabled={executingOperation}
                label='Factor'
                type="number" 
                handleChange={handleInputChange} 
                error={errors['factor-val']} />
            <ActionBtn 
                action={handlers.handleMultiply}
                wrapperCssClass='multiply-btn-container'
                text="Multiply By"
                disabled={executingOperation} />
        </div>
    )
}

export default MultiplyControls