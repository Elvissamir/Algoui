import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import { ArrayFormControlHandlers } from "../../../hooks/dataStructures/array/useArrayForm"
import ActionBtn from "../../ActionBtn"
import InputPackField from "../../InputPackField"

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
            <div className="lower-input-container">
                <InputPackField 
                    inputId="low-val"
                    inputValue={lowLimitInput}
                    inputType='number'
                    label="Filter lower:" 
                    checkId="low-check" 
                    checkName="low-val"
                    disabled={executingOperation}
                    checked={includeLowLimit} 
                    handleChange={handleInputChange}
                    error={errors['low-val']} />  
                </div>
            <div className="higher-input-container">    
                <InputPackField 
                    inputId="high-val"
                    inputValue={highLimitInput}
                    inputType='number'
                    disabled={executingOperation}
                    label="Filter higher:" 
                    checkId="high-check" 
                    checkName="high-val"
                    checked={includeHighLimit} 
                    handleChange={handleInputChange}
                    error={errors['high-val']} />
            </div>
            <ActionBtn 
                action={handlers.handleFilter}
                wrapperCssClass='filter-btn-container'
                text="Filter"
                disabled={executingOperation} />
        </div>
    )
}

export default FilterControls