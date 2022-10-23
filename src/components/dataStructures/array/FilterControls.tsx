import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import { ArrayFormControlHandlers } from "../../../hooks/dataStructures/array/useArrayForm"
import ActionBtn from "../../ActionBtn"
import InputPackField from "../../InputPackField"
import FilterFields from "./FilterFields"

interface FilterControlsProps {
    lowLimitInput: string 
    includeLowLimit: boolean
    highLimitInput: string 
    includeHighLimit: boolean
    executingOperation: boolean
    errors: FormDataError
    handlers: ArrayFormControlHandlers
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FilterControls = ({
        lowLimitInput, includeLowLimit,
        highLimitInput, includeHighLimit,
        executingOperation, errors,
        handlers, handleInputChange
    }: FilterControlsProps) => {

    return (
        <div className="filter-array-controls">
            <FilterFields
                lowLimitInput={lowLimitInput}
                includeLowLimit={includeLowLimit}
                highLimitInput={highLimitInput}
                includeHighLimit={includeHighLimit}
                executingOperation={executingOperation}
                errors={errors}
                handleInputChange={handleInputChange}/>
            <ActionBtn 
                action={handlers.handleFilter}
                wrapperCssClass='filter-btn-container'
                text="Filter"
                disabled={executingOperation} />
        </div>
    )
}

export default FilterControls