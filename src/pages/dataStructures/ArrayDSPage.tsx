import { useEffect, useState, ChangeEvent } from 'react'
import { useAnimationControls, Transition } from 'framer-motion'
import { FormDataError } from '../../core/generalTypes'
import InputValidator from '../../validators/InputValidator'
import useFormErrorsHandler from '../../hooks/useFormErrorsHandler'
import SectionContainer from '../../components/SectionContainer'
import ArrayControls from '../../components/dataStructures/array/ArrayControls'
import ArrayAction from '../../components/dataStructures/array/ArrayAction'

const ArrayDSPage = () => {

    const [dataArray, setDataArray] = useState(initialState.data.map(item => { return {...item} }))

    const [ operation, setOperation ] = useState<ArrayOperation>(initialState.operation)
    const [ executingOperation, setExecutingOperation ] = useState(false)
    const [ actionValue, setActionValue ] = useState(initialState.value)
    const [ actionIndex, setActionIndex ] = useState(initialState.index)
    const [ factor, setFactor ] = useState(initialState.factor)
    const [ lowLimit, setLowLimit ] = useState(initialState.lowVal)
    const [ highLimit, setHighLimit ] = useState(initialState.highVal)
    
    // Form Data
    const [ inputIndex, setInputIndex ] = useState('0')
    const [ inputItemVal, setInputItemVal ] = useState('0')
    const [ factorValInput, setFactorValInput ] = useState('2')
    const [ lowValInput, setLowValInput ] = useState('0')
    const [ includeLow, setIncludeLow ] = useState(true)
    const [ highValInput, setHighValInput ] = useState('5')
    const [ includeHigh, setIncludeHigh ] = useState(true)
    const [ errors, setErrors ] = useState<FormDataError>({})
    const { handleSingleError } = useFormErrorsHandler({ errors, setErrors })

    const controls = useAnimationControls()

    const displayArrayVariants = () => {
        return (i: number) => ({
            opacity: [0, 1],
            x: [-50, 0],
            transition: { delay: i * 0.5 },
        })
    }

    const addItemToStartVariants = () => {
        return (i: number) => ({
            color: i === actionIndex? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === actionIndex? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            opacity: i === actionIndex? [0, 1, 1, 1] : 1,
            x: i === actionIndex? [-50, 0] : 0,
            transition: { delay: i === actionIndex? 0.05 : i * 0.025, bounce: 0 },
        })
    }

    const addItemToPositionVariants = () => {
        const color = (index: number) => {
            return index === actionIndex? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000'
        }

        const backgroundColor = (index: number): string | string[] => {
            return index === actionIndex? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff'
        }

        const opacity = (index: number): number | number[] => {
            return index === actionIndex? 1 : 1
        }

        const y = (index: number): number | number[] => {
            if (index < actionIndex) return 0

            if (index > actionIndex) return 0

            return [70, 0]
        }

        const transition = (index: number): Transition => {
            return { delay: index === 0? 0.05 : index * 0.025 }
        }

        return (i: number) => ({
            color: color(i),
            backgroundColor: backgroundColor(i),
            opacity: opacity(i),
            y: y(i),
            transition: transition(i),
        })
    }

    const removeItemFromPositionVariants = () => {
        const color = (index: number) => {
            return index === actionIndex? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000'
        }

        const backgroundColor = (index: number): string | string[] => {
            return index === actionIndex? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff'
        }

        const opacity = (index: number): number | number[] => {
            return index === actionIndex? [1, 1, 0, 1, 0] : 1
        }

        const y = (index: number): number | number[] => {
            if (index === actionIndex) return [0, 70]

            else return 0
        }

        const transition = (index: number): Transition => {
            return { delay: index === actionIndex? 0.05 : index * 0.025 }
        }

        return (i: number) => ({
            color: color(i),
            backgroundColor: backgroundColor(i),
            opacity: opacity(i),
            y: y(i),
            transition: transition(i),
        })
    }

    const multiplyByItemVariants = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? ['#312e81', '#fff'] : '#fff',
            color: i === actionIndex? [ '#fff', '#000000'] : '#000000',
            transition: { duration: 0.2 }
        })
    }

    const filterItemVariants = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? ['#312e81', '#fff'] : '#fff',
            color: i === actionIndex? [ '#fff', '#000000'] : '#000000',
            transition: { duration: 0.2 }
        })
    }
    
    const addItemToEndVariants = () => {
        return (i: number) => ({
            color: i === actionIndex? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === actionIndex? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            opacity: i === actionIndex? [0, 1] : 1,
            x: i === actionIndex? [50, 50,  0] : 0,
            transition: { delay: i === actionIndex? 0.05 : i * 0.025 }
        })
    }

    const displayArrayAction = async () => {
        await controls.start(displayArrayVariants())

        restoreAfterAction()
    }

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

    const addToStartAction = async () => {
        await controls.start(addItemToStartVariants())

        restoreAfterAction()
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
        if (operation === null) displayArrayAction()
    }, [dataArray, operation])

    useEffect(() => {
        if (operation === 'add-start') addToStartAction()
    }, [dataArray, operation])

    useEffect(() => {
        if (operation === 'add-to') addItemToPositionAction()
    }, [dataArray, operation])

    useEffect(() => {
        if (operation === 'add-end') addItemToEndAction()
    }, [ dataArray, operation ])

    const handleReset = () => {
        setDataArray(initialState.data.map(item => { return {...item} }))
        setActionValue(initialState.value)
        setLowLimit(initialState.lowVal)
        setHighLimit(initialState.highVal)
        setOperation(initialState.operation)
        setFactor(initialState.factor)
        setActionIndex(initialState.index)
    }

    const handleAddToStart = () => {
        const ndataArray = [...dataArray]
        ndataArray.unshift({ id: Math.random(), val: actionValue})

        setActionIndex(0)
        setDataArray(ndataArray)
        setOperation('add-start')
    }

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
        await controls.start(i => ({
            color: i === 0? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === 0? '#312e81' : '#ffff',
            opacity: i === 0? [1,0,1,0] : 1,
            position: i === 0? 'absolute' : 'static',
            x: i === 0? -50 : 0,
            transition: { delay: i === 0? 0.05 : i * 0.025 },
        }))

        setOperation('remove-start')
        handleRemoveFromStartAction()
    }

    const handleRemoveFromStartAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.shift()

        setDataArray(ndataArray)
    }   

    const handleRemoveFromEnd = async () => {
        await controls.start(i => ({
            color: i === dataArray.length - 1? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === dataArray.length - 1? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            opacity: i === dataArray.length - 1? [0, 1, 0, 1] : 1,
            x: i === dataArray.length - 1? 50 : 0,
            transition: { delay: i === dataArray.length - 1? 0.05 : i * 0.025 },
        }))

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

    const handleFilterItems = async () => {
        filterItemsAction()
        setOperation('filter')
    }

    const sortIncreasing = () => {
        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => a.val - b.val)

        setDataArray(ndataArray)
        setOperation('sort-increasing')
    }

    const sortDecreasing = () => {
        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => b.val - a.val)

        setDataArray(ndataArray)
        setOperation('sort-decreasing')
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isValidInput = InputValidator.isValidNumber(e.target.value)
        const error = isValidInput? null : { message: 'Only numbers are allowed.'}

        if (e.target.id === 'item-val') {
            if (!error) setActionValue(parseInt(e.target.value))
            
            setInputItemVal(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }

        if (e.target.id === 'item-position') {
            if (!error) setActionIndex(parseInt(e.target.value))
            
            setInputIndex(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'factor-val') {
            if (!error) setFactor(parseInt(e.target.value))

            setFactorValInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'low-val') {
            if (!error) setLowLimit(parseInt(e.target.value))

            setLowValInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }
        
        if (e.target.id === 'high-val') {
            if (!error) setHighLimit(parseInt(e.target.value))

            setHighValInput(e.target.value)
            handleSingleError({ field: e.target.id, error })
        }

        if (e.target.id === 'low-check') setIncludeLow(e.target.checked)

        if (e.target.id === 'high-check') setIncludeHigh(e.target.checked)
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