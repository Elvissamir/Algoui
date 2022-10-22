import { ArrayFormControlHandlers } from "../../../hooks/dataStructures/array/useArrayForm"
import ActionBtn from "../../ActionBtn"

interface SortItemControlsProps {
    executingOperation: boolean
    handlers: ArrayFormControlHandlers
}

const SortItemControls = ({ executingOperation, handlers }: SortItemControlsProps) => {
    return (
        <div className="sort-items-controls">
            <ActionBtn 
                action={handlers.handleSortIncreasing}
                wrapperCssClass='sort-increasing-btn-container'
                text="Sort Increasing"
                disabled={executingOperation} />
            <ActionBtn 
                action={handlers.handleSortDecreasing}
                wrapperCssClass='sort-decreasing-btn-container'
                text="Sort Decreasing"
                disabled={executingOperation} />
        </div>
    )
}

export default SortItemControls