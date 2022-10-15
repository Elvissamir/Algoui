import { useEffect, useState } from 'react'
import { motion, AnimatePresence, Variants, useAnimationControls } from 'framer-motion'

type ArrayOperation = 'add-start' | 'add-end' | 'remove-start' | 'remove-end' | null

const ArrayDS = () => {
    const [dataArray, setDataArray] = useState([
        { id: Math.random(), val: 1 },
        { id: Math.random(), val: 2 },
        { id: Math.random(), val: 3 },
        { id: Math.random(), val: 4 },
        { id: Math.random(), val: 5 }
    ])

    const arrayItemVariants: Variants = {
        show: {
            opacity: [0, 1]
        },
        hidden: {
            opacity: 0
        },
        new: { 
            opacity: [0, 1],
        },
        removed: {
            opacity: 0
        },
        exit: {
            opacity: 0
        }
    }

    const listVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition:{
            type: 'spring',
            staggerChildren: 0.5
          }
        }
      }

    const item = {
        show: {
            opacity: 1
        },
        hidden: {
            opacity: 0
        },
        new: { 
            opacity: [0, 1],
        },
        removed: {
            opacity: 0
        }
    }

    const [operation, setOperation] = useState<ArrayOperation>(null)
    const [nid, setnId] = useState(0)
    const [nindex, setnIndex] = useState(0)

    const controls = useAnimationControls()

    useEffect(() => {
        if (operation === null) {
            controls.start(i => ({
                opacity: [0, 1],
                x: [-50, 0],
                transition: { delay: i * 0.5 },
             }))
        }

        if (operation === 'add-start') {
            controls.start(i => ({
               color: i === 0? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
               backgroundColor: i === 0? ['#312e81', '#312e81', '#312e81', '#ffff'] : 'transparent',
               opacity: i === 0? [1, 1, 1, 1] : 1,
               x: i === 0? [-50, 0] : [5, 0],
               transition: { delay: i === 0? 0.05 : i * 0.025 },
            }))
        }

        if (operation === 'remove-start') controls.start('hidden')
    }, [ dataArray ])

    const handleAddToStart = () => {
        const ndataArray = [...dataArray]
        const nid = Math.floor(Math.random() * 10)
    
        setnId(nid)
        setnIndex(0)

        ndataArray.unshift({ id: Math.random(), val: nid})
        setDataArray(ndataArray)

        setOperation('add-start')
    }

    const handleAddToEnd = () => {
        const ndataArray = [...dataArray]
        ndataArray.push({ id: Math.random(), val: Math.floor(Math.random() * 10) })
        setDataArray(ndataArray)

        setOperation('add-end')
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
                        <button onClick={handleRemoveFromStart} type="button">Remove First</button>
                        <button onClick={handleRemoveFromEnd} type="button">Remove Last</button>
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
                            <AnimatePresence>     
                                {dataArray.map((item, index) => 
                                        <motion.li 
                                            className='array-item' 
                                            variants={arrayItemVariants}
                                            animate={controls}
                                            custom={index}
                                            key={item.id}>
                                                {item.val}
                                        </motion.li> 
                                    )}
                            </AnimatePresence>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-bottom"></div>
        </section>
    )
}

export default ArrayDS