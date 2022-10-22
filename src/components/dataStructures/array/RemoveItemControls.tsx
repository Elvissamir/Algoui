import { ArrayFormControlHandlers } from "../../../hooks/dataStructures/array/useArrayForm"
import ActionBtn from "../../ActionBtn"

interface RemoveItemControlsProps {
    executingOperation: boolean
    handlers: ArrayFormControlHandlers
}

const RemoveItemControls = ({ executingOperation, handlers }: RemoveItemControlsProps) => {
    return (
        <div className="remove-item-controls">
            <ActionBtn 
                action={handlers.handleRemoveFromStart} 
                wrapperCssClass="remove-start-btn-container"
                text="Remove Start"
                disabled={executingOperation} />
            <ActionBtn 
                action={handlers.handleRemoveFromEnd} 
                wrapperCssClass="remove-end-btn-container"
                text="Remove End"
                disabled={executingOperation} />
            <ActionBtn 
                action={handlers.handleRemoveFromPosition} 
                wrapperCssClass="remove-position-btn-container"
                text="Remove Position"
                disabled={executingOperation} />
        </div>
    )
}

export default RemoveItemControls