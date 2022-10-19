const ArrayControls = () => {
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
                value={inputItemVal}
                disabled={executingOperation} 
                type='number' />
        </div>
        <FieldErrorInfo error={errors['item-val']} />
    </div>
    <div className="input-field-container">
        <div className="input-field">
            <label htmlFor="item-position">Position: </label>
            <input 
                onChange={handleInputChange}
                className="input-number" 
                id="item-position" 
                value={inputIndex} 
                type='number' />
        </div>
        <FieldErrorInfo error={errors['item-position']} />
    </div>
    <button onClick={handleAddToStart} type="button">Add First</button>
    <button onClick={handleAddToEnd} type="button">Add Last</button>
    <button onClick={handleAddToPosition} type="button">Add To</button>
    </div>
    <div className="remove-item-controls">
        <button onClick={handleRemoveFromPosition} type="button">Remove From</button>
        <button onClick={handleRemoveFromStart} type="button">Remove First</button>
        <button onClick={handleRemoveFromEnd} type="button">Remove Last</button>
    </div>
    <div className="sort-items-controls">
        <button onClick={sortIncreasing} type="button">Sort (increasing)</button>
        <button onClick={sortDecreasing} type="button">Sort (decreasing)</button>
    </div>
    <div className="create-new-array-controls">
        <div className="input-field-container">
            <div className="input-field">
                <label htmlFor="factor-val">Multiply by: </label>
                <input 
                    onChange={handleInputChange}
                    className="input-number" 
                    id="factor-val" 
                    value={factorValInput} 
                    type='number' />
            </div>
            <FieldErrorInfo error={errors['factor-val']} />
        </div>
        <button onClick={handleMultiply} type="button">Multiply</button>
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
                            value={lowValInput} />
                        <input 
                            onChange={handleInputChange}
                            className="input-check" 
                            type="checkbox" 
                            checked={includeLow}
                            name="low-val" 
                            id="low-check" />
                    </div>
                </div>
                <FieldErrorInfo error={errors['low-val']} />
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
                            value={highValInput} />
                        <input 
                            onChange={handleInputChange}
                            className="input-check" 
                            type="checkbox" 
                            checked={includeHigh}
                            name="high-val" 
                            id="high-check" />
                    </div>
                </div>
                <FieldErrorInfo error={errors['high-val']} />
            </div>
        </div>
        <button onClick={handleFilterItems} type="button">Filter items</button>
    </div>
    <div className='reset-container'>
        <button onClick={handleReset} className='reset-btn'>Reset</button>
    </div>
        </>
    )  
}

export default ArrayControls