import { useEffect } from 'react'
import { ArrayItem, ArrayOperation } from '../../../../core/dataStructures/ArrayDS'
import { AnimationControls } from 'framer-motion'
import useAddToEndVariant from '../variants/useAddToEndVariant'

interface UseAddToEndActionProps {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    actionValue: number
    actionIndex: number
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
    operation: ArrayOperation
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    controls: AnimationControls
    setExecutingOperation: React.Dispatch<React.SetStateAction<boolean>>
    afterAction: () => void
}

const useAddToEndAction = ({ 
    dataArray, 
    setDataArray,
    actionValue, 
    actionIndex, 
    setActionIndex, 
    setExecutingOperation,
    operation, 
    setOperation,
    controls, 
    afterAction }: UseAddToEndActionProps) => {

    const addToEndVariant = useAddToEndVariant({ actionIndex })

    const addItemToEndAction = async () => {
        await controls.start(addToEndVariant())

        afterAction()
    }

    useEffect(() => {
        if (operation === 'add-end') addItemToEndAction()
    }, [ dataArray, operation ])

    const handleAddToEnd = () => {
        const ndataArray = [...dataArray]

        setActionIndex(ndataArray.length)

        ndataArray.push({ id: Math.random(), val: actionValue})
        setDataArray(ndataArray)

        setOperation('add-end')
        setExecutingOperation(true)
    }

    return {
        handleAddToEnd
    }
}

export default useAddToEndAction