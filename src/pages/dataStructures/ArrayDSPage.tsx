import { useEffect } from 'react'
import { useAnimationControls } from 'framer-motion'
import InputValidator from '../../validators/InputValidator'
import SectionContainer from '../../components/SectionContainer'
import ArrayControls from '../../components/dataStructures/array/ArrayControls'
import ArrayAction from '../../components/dataStructures/array/ArrayAction'

const ArrayDSPage = () => {
    const controls = useAnimationControls()
  
    const multiplyAction = async () => {
        const ndataArray = [...dataArray]

        ndataArray[actionIndex].val = ndataArray[actionIndex].val * factor
        
        await controls.start(multiplyByItemVariants())

        setActionIndex(actionIndex + 1)
        setDataArray(ndataArray)
    }

    const filterItemsAction = async () => {
        const ndataArray = [...dataArray]

        if ((dataArray[actionIndex].val > highLimit && includeHigh) || (includeLow && dataArray[actionIndex].val < lowLimit)) {
            const ndataArray = [...dataArray]
            ndataArray.splice(actionIndex, 1)

            await controls.start(filterItemVariants())

            return setDataArray(ndataArray)
        }

        await controls.start(filterItemVariants())

        setActionIndex(actionIndex + 1)
        setDataArray(ndataArray)
    }

    const restoreAfterAction = () => {
        if (InputValidator.isValidNumber(inputIndex)) setActionIndex(parseInt(inputIndex))
        
        setExecutingOperation(false)
    }

    const addItemToPositionAction = async () => {
        await controls.start(addItemToPositionVariants())

        restoreAfterAction()
    }

    const addItemToEndAction = async () => {
        await controls.start(addItemToEndVariants())

        restoreAfterAction()
    }

    const multiplyStepAction = () => {
        const timer = setInterval(async () => {
            await multiplyAction()
        }, 650)

        return timer
    }

    const filterStepAction = () => {
        const timer = setInterval(async () => {
            await filterItemsAction()
        }, 650)

        return timer
    }

    useEffect(() => {
        if (operation === 'multipy') {
            if (actionIndex < dataArray.length) {
                const stepTimer = multiplyStepAction()

                return () => clearInterval(stepTimer)
            }

            restoreAfterAction()
        }
    }, [dataArray, operation])

    useEffect(() => {
        if (operation === 'filter') {
            if (actionIndex < dataArray.length) {
                const stepTimer = filterStepAction()

                return () => clearInterval(stepTimer)
            }

            restoreAfterAction()
        }
    }, [dataArray, operation])

    useEffect(() => {
        if (operation === 'add-to') addItemToPositionAction()
    }, [dataArray, operation])

    useEffect(() => {
        if (operation === 'add-end') addItemToEndAction()
    }, [ dataArray, operation ])


    const handleAddToPosition = () => {
        if (actionIndex === 0) return handleAddToStart()
        
        if (actionIndex >= dataArray.length - 1) return handleAddToEnd()

        const ndataArray = [...dataArray]

        setActionIndex(actionIndex)
        
        ndataArray.splice(actionIndex, 0, { id: Math.random(), val: actionValue})
        setDataArray(ndataArray)
        setOperation('add-to')
    }

    const handleAddToEnd = () => {
        const ndataArray = [...dataArray]

        setActionIndex(ndataArray.length)

        ndataArray.push({ id: Math.random(), val: actionValue})
        setDataArray(ndataArray)

        setOperation('add-end')
    }

    const handleRemoveFromStart = async () => {
        await controls.start()

        setOperation('remove-start')
        handleRemoveFromStartAction()
    }

    const handleRemoveFromStartAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.shift()

        setDataArray(ndataArray)
    }   

    const handleRemoveFromEnd = async () => {
        await controls.start()

        setOperation('remove-end')
        handleRemoveFromEndAction()
    }

    const handleRemoveFromEndAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.pop()

        setDataArray(ndataArray)
    }

    const handleRemoveFromPosition = async () => {
        await controls.start(removeItemFromPositionVariants())

        setOperation('remove-from')
        handleRemoveFromPositionAction()
    }

    const handleRemoveFromPositionAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.splice(actionIndex, 1)

        setDataArray(ndataArray)
    }

    const handleMultiply = async () => {
        multiplyAction()

        setOperation('multipy')
        setExecutingOperation(true)
    }

    const handleFilter = async () => {
        filterItemsAction()
        setOperation('filter')
    }

    const handleSortIncreasing = () => {
        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => a.val - b.val)

        setDataArray(ndataArray)
        setOperation('sort-increasing')
    }

    const handleSortDecreasing = () => {
        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => b.val - a.val)

        setDataArray(ndataArray)
        setOperation('sort-decreasing')
    }

    return (
        <SectionContainer 
            title='Array Data Structure'
            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquid dolores aliquam, laboriosam magnam amet ducimus illo. Officia, cumque distinctio illum est consequuntur similique alias exercitationem eos consequatur voluptatem molestias. 
                Veniam?'
            controls={<ArrayControls />}
            action={<ArrayAction />} />
    )
}

export default ArrayDSPage