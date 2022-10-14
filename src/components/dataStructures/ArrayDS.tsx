import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'
import { useTransition, animated } from "@react-spring/web";

type ArrayOperation = 'add-start' | 'add-end' | 'remove-start' | 'remove-end' | null

const ArrayDS = () => {
    const [dataArray, setDataArray] = useState([1, 2, 3, 4, 5])
    const [newItem, setNewItem] = useState<number | null>(23)
    const [operation, setOperation] = useState<ArrayOperation>(null)

    const handleAddToStart = () => {
        if (newItem) {
            const ndataArray = [...dataArray]
            ndataArray.unshift(newItem)
            setDataArray(ndataArray)
        }

        setOperation('add-start')
    }

    const handleAddToEnd = () => {
        if (newItem) {
            const ndataArray = [...dataArray]
            ndataArray.push(newItem)
            setDataArray(ndataArray)
        }
    }

    const handleRemoveFromStart = () => {
        const ndataArray = [...dataArray]
        ndataArray.shift()
        setDataArray(ndataArray)
    }

    const handleRemoveFromEnd = () => {
        const ndataArray = [...dataArray]
        ndataArray.pop()
        setDataArray(ndataArray)
    }

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
                        <button onClick={handleAddToStart} type="button">Add First</button>
                        <button onClick={handleAddToEnd} type="button">Add Last</button>
                    </div>
                    <div className="remove-item-controls">
                        <div className="input-field">
                            <label htmlFor="index-val">Value of the index</label>
                            <input className="input-text" id='index-val' type="text" />
                        </div>
                        <button type="button">Remove From</button>
                        <button onClick={handleRemoveFromStart} type="button">Remove Last</button>
                        <button onClick={handleRemoveFromEnd} type="button">Remove First</button>
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
                    <div className='array-container'></div>
                </div>
            </div>
            <div className="section-bottom"></div>
        </section>
    )
}

export default ArrayDS