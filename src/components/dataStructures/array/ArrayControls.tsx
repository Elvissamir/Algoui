import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import ActionBtn from "../../ActionBtn"
import InputField from "../../InputField"
import InputPackField from "../../InputPackField"

interface ControlHandlers {
    handleAddToStart: () => void
    handleAddToEnd: () => void
    handleAddToPosition: () => void
    handleRemoveFromPosition: () => void 
    handleRemoveFromStart: () => void
    handleRemoveFromEnd: () => void
    handleSortIncreasing: () => void
    handleSortDecreasing: () => void
    handleFilter: () => void
    handleMultiply: () => void
}

interface ArrayControlsProps {
    indexInput: string
    valueInput: string
    factorInput: string
    lowLimitInput: string 
    includeLowLimit: boolean 
    includeHighLimit: boolean
    highLimitInput: string
    executingOperation: boolean
    handlers: ControlHandlers
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
            <div className="add-item-controls">
                <InputField 
                    id="item-val"
                    value={valueInput} 
                    label='Value'
                    disabled={false}
                    type="number"
                    handleChange={handleInputChange} 
                    error={errors['item-val']}/>
                <InputField 
                    id="item-position"
                    value={indexInput}
                    label='Position'
                    disabled={false}
                    type="number"
                    handleChange={handleInputChange}
                    error={errors['item-position']} />
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
            <div className="create-new-array-controls">
                <InputField 
                    id="factor-val" 
                    value={factorInput} 
                    disabled={false}
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
            <div className="filter-array-controls">
                <div className="lower-input-container">
                    <InputPackField 
                        inputId="low-val"
                        inputValue={lowLimitInput}
                        inputType='number'
                        label="Filter lower than:" 
                        checkId="low-check" 
                        checkName="low-val"
                        disabled={false}
                        checked={includeLowLimit} 
                        handleChange={handleInputChange}
                        error={errors['low-val']} />  
                    </div>
                <div className="higher-input-container">    
                    <InputPackField 
                        inputId="high-val"
                        inputValue={highLimitInput}
                        inputType='number'
                        disabled={false}
                        label="Filter higher than:" 
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
            <div className='reset-container'>
                <ActionBtn 
                    action={handleReset}
                    wrapperCssClass='reset-btn-container'
                    text="Reset"
                    disabled={false} />
            </div>
        </>
    )  
}

export default ArrayControls