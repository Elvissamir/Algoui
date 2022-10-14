import { useState } from 'react'

const ArrayDS = () => {
    const [dataArray, setDataArray] = useState([1, 2, 3, 4, 5])

    return (
        <section className="content-section">
            <div className="section-top">
                <h1>Array Data Structure</h1>
            </div>
            <div className="section-info">
                <p className="text-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aliquid dolores aliquam, laboriosam magnam amet ducimus illo. Officia, cumque distinctio illum est consequuntur similique alias exercitationem eos consequatur voluptatem molestias. 
                    Veniam?
                </p>
            </div>
            <div className="section-action-wrapper">
                <div className="section-controls">
                    <div className="add-item-controls">
                        <div className="input-field">
                            <label htmlFor="number-val">Value of the new item</label>
                            <input className="input-text" id="number-val" type='text'/>
                        </div>
                        <button type="button">Add First</button>
                        <button type="button">Add Last</button>
                    </div>
                    <div className="remove-item-controls">
                        <div className="input-field">
                            <label htmlFor="index-val">Value of the index</label>
                            <input className="input-text" id='index-val' type="text" />
                        </div>
                        <button type="button">Remove From</button>
                        <button type="button">Remove Last</button>
                        <button type="button">Remove First</button>
                    </div>
                    <div className="sort-items-controls">
                        <button type="button">Sort (increasing)</button>
                        <button type="button">Sort (decreasing)</button>
                    </div>
                    <div className="create-new-array-controls">
                        <div className="input-field">
                            <label htmlFor="multiple-val">Value to add</label>
                            <input className="input-text" id="multiple-val" type="text" />
                        </div>
                        <button type="button">Multiply all items</button>
                    </div>
                    <div className="filter-array-controls">
                        <div className="lower-input-container">
                            <div className="input-field">
                                <label htmlFor="low-val">Lower than: </label>
                                <div className="input-pack-container">
                                    <input className="input-text" id="low-val" type="text" />
                                    <input className="input-check" type="checkbox" name="" id="low-check" />
                                </div>
                            </div>
                        </div>
                        <div className="higher-input-container">
                            <div className="input-field">
                                <label htmlFor="high-val">Higher than: </label>
                                <div className="input-pack-container">
                                    <input className="input-text" id="high-val" type="text" />
                                    <input className="input-check" type="checkbox" name="" id="high-check" />
                                </div>
                            </div>
                        </div>
                        <button type="button">Filter items</button>
                    </div>
                </div>
                <div className='section-action'>
                    <div className='array-container'>
                        <ul className='array-item-list'>
                            {dataArray.map((item, index) => 
                                <li className='array-item' key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-bottom"></div>
        </section>
    )
}

export default ArrayDS