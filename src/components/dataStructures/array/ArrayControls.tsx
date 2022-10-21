import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
import ActionBtn from "../../ActionBtn"
import FieldErrorInfo from "../../FieldErrorInfo"

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
                <div className='input-field-container'>
                    <div className="input-field">
                        <label htmlFor="item-val">Value: </label>
                        <input 
                            onChange={handleInputChange}
                            className="input-number" 
                            id="item-val" 
                            value={valueInput}
                            disabled={executingOperation} 
                            type='number' />
                    </div>
                    { errors['item-val'] && <FieldErrorInfo error={errors['item-val']} />}
                </div>
                <div className="input-field-container">
                    <div className="input-field">
                        <label htmlFor="item-position">Position: </label>
                        <input 
                            onChange={handleInputChange}
                            className="input-number" 
                            id="item-position" 
                            value={indexInput} 
                            type='number' />
                    </div>
                    { errors['item-position'] && <FieldErrorInfo error={errors['item-position']} />}
                </div>
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
                <div className="input-field-container">
                    <div className="input-field">
                        <label htmlFor="factor-val">Multiply by: </label>
                        <input 
                            onChange={handleInputChange}
                            className="input-number" 
                            id="factor-val" 
                            value={factorInput} 
                            type='number' />
                    </div>
                    { errors['factor-val'] && <FieldErrorInfo error={errors['factor-val']} />}
                </div>
                <ActionBtn 
                    action={handlers.handleMultiply}
                    wrapperCssClass='multiply-btn-container'
                    text="Multiply By"
                    disabled={executingOperation} />
            </div>
            <div className="filter-array-controls">
                <div className="lower-input-container">
                    <div className="input-field-container">
                        <div className="input-field">
                            <label htmlFor="low-val">Filter lower than:</label>
                            <div className="input-pack-container">
                                <input 
                                    onChange={handleInputChange}
                                    className="input-text" 
                                    id="low-val" 
                                    type='number'
                                    value={lowLimitInput} />
                                <input 
                                    onChange={handleInputChange}
                                    className="input-check" 
                                    type="checkbox" 
                                    checked={includeLowLimit}
                                    name="low-val" 
                                    id="low-check" />
                            </div>
                        </div>
                        { errors['low-val'] && <FieldErrorInfo error={errors['low-val']} />}
                    </div>
                </div>
                <div className="higher-input-container">
                    <div className="input-field-container">
                        <div className="input-field">
                            <label className='input-label' htmlFor="high-val">Filter higher than:</label>
                            <div className="input-pack-container">
                                <input 
                                    onChange={handleInputChange}
                                    className="input-text" 
                                    id="high-val" 
                                    type='number'
                                    value={highLimitInput} />
                                <input 
                                    onChange={handleInputChange}
                                    className="input-check" 
                                    type="checkbox" 
                                    checked={includeHighLimit}
                                    name="high-val" 
                                    id="high-check" />
                            </div>
                        </div>
                        { errors['high-val'] && <FieldErrorInfo error={errors['high-val']} />}
                    </div>
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