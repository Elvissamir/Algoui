import { ChangeEvent } from "react"
import { FormDataError } from "../../../core/generalTypes"
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
                <button onClick={handlers.handleAddToStart} type="button">Add First</button>
                <button onClick={handlers.handleAddToEnd} type="button">Add Last</button>
                <button onClick={handlers.handleAddToPosition} type="button">Add To</button>
            </div>
            <div className="remove-item-controls">
                <button onClick={handlers.handleRemoveFromPosition} type="button">Remove From</button>
                <button onClick={handlers.handleRemoveFromStart} type="button">Remove First</button>
                <button onClick={handlers.handleRemoveFromEnd} type="button">Remove Last</button>
            </div>
            <div className="sort-items-controls">
                <button onClick={handlers.handleSortIncreasing} type="button">Sort (increasing)</button>
                <button onClick={handlers.handleSortDecreasing} type="button">Sort (decreasing)</button>
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
                <button onClick={handlers.handleMultiply} type="button">Multiply</button>
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
                <button onClick={handlers.handleFilter} type="button">Filter items</button>
            </div>
            <div className='reset-container'>
                <button onClick={handleReset} className='reset-btn'>Reset</button>
            </div>
        </>
    )  
}

export default ArrayControls