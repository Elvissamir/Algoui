import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import { ArrayFormControlHandlers } from "../../../hooks/dataStructures/array/useArrayForm"
import ResetControls from "../../ResetControls"
import AddItemControls from "./AddItemControls"
import FilterControls from "./FilterControls"
import MultiplyControls from "./MultiplyControls"
import RemoveItemControls from "./RemoveItemControls"
import SortItemControls from "./SortItemControls"

interface ArrayControlsProps {
    indexInput: string
    valueInput: string
    factorInput: string
    lowLimitInput: string 
    includeLowLimit: boolean 
    includeHighLimit: boolean
    highLimitInput: string
    executingOperation: boolean
    handlers: ArrayFormControlHandlers
    errors: FormDataError
    handleReset: () => void
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ArrayControls = ({ 
    indexInput, 
    valueInput, 
    factorInput,
    lowLimitInput, 
    includeLowLimit,
    highLimitInput,
    includeHighLimit,
    executingOperation, 
    handlers,
    errors, 
    handleReset,
    handleInputChange }: ArrayControlsProps) => {

    return (
        <>  
            <AddItemControls 
                indexInput={indexInput}
                valueInput={valueInput}
                executingOperation={executingOperation}
                errors={errors}
                handlers={handlers}
                handleInputChange={handleInputChange} />
            <RemoveItemControls
                executingOperation={executingOperation}
                handlers={handlers} />
            <SortItemControls
                executingOperation={executingOperation}
                handlers={handlers} />
            <MultiplyControls
                factorInput={factorInput}
                executingOperation={executingOperation}
                errors={errors}
                handleInputChange={handleInputChange}
                handlers={handlers} />
            <FilterControls
                lowLimitInput={lowLimitInput}
                includeLowLimit={includeLowLimit} 
                highLimitInput={highLimitInput}
                includeHighLimit={includeHighLimit} 
                executingOperation={executingOperation}
                errors={errors}
                handlers={handlers}
                handleInputChange={handleInputChange} />
            <ResetControls handleReset={handleReset} />
        </>
    )  
}

export default ArrayControls