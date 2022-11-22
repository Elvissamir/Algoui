import { ChangeEvent } from "react"
import { FormDataError } from "../../core/generalTypes"
import { ArrayFormControlHandlers } from "../../hooks/dataStructures/array/useArrayForm"
import AddItemControls from "./array/AddItemControls"
import RemoveItemControls from "./array/RemoveItemControls"

interface AddAndRemoveItemControlsProps {
    valueInput: string 
    indexInput: string 
    executingOperation: boolean
    handlers: ArrayFormControlHandlers
    errors: FormDataError
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AddAndRemoveItemControls = ({
    valueInput, indexInput,
    executingOperation, 
    handlers,
    handleInputChange,
    errors
}: AddAndRemoveItemControlsProps) => {
    return (
        <>
            <AddItemControls 
                valueInput={valueInput}
                indexInput={indexInput}
                executingOperation={executingOperation}
                errors={errors}
                handlers={handlers}
                handleInputChange={handleInputChange} />
            <RemoveItemControls
                executingOperation={executingOperation}
                handlers={handlers} />
        </>
    )
}

export default AddAndRemoveItemControls