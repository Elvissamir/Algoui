import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import { ArrayFormControlHandlers } from "../../../hooks/dataStructures/array/useArrayForm"
import ActionBtn from "../../ActionBtn"
import AddItemFields from "./AddItemFields"

interface AddItemControlsProps {
    valueInput: string 
    indexInput: string 
    executingOperation: boolean
    handlers: ArrayFormControlHandlers
    errors: FormDataError
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AddItemControls = ({ 
        valueInput, 
        indexInput,
        executingOperation, 
        handleInputChange,
        handlers,
        errors
    }: AddItemControlsProps) => {

    return (
        <div className="add-item-controls">
            <AddItemFields 
                valueInput={valueInput}
                indexInput={indexInput}
                executingOperation={executingOperation}
                errors={errors}
                handleInputChange={handleInputChange} />
            <div className="add-item-btns">
                <ActionBtn 
                    action={handlers.handleAddToStart} 
                    wrapperCssClass="add-start-btn-container"
                    text="Add Start"
                    disabled={executingOperation} />
                <ActionBtn 
                    action={handlers.handleAddToEnd} 
                    wrapperCssClass="add-end-btn-container"
                    text="Add End"
                    disabled={executingOperation} />
                <ActionBtn 
                    action={handlers.handleAddToPosition} 
                    wrapperCssClass="add-position-btn-container"
                    text="Add Position"
                    disabled={executingOperation} />
            </div>
        </div>
    )
}

export default AddItemControls