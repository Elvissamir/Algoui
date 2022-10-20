import { useEffect } from 'react'
import { ArrayItem, ArrayOperation } from '../../../../core/dataStructures/ArrayDS'
import { AnimationControls } from 'framer-motion'

interface UseAddToEndActionProps {
    dataArray: ArrayItem[]
    actionValue: number
    operation: ArrayOperation
    controls: AnimationControls
    afterAction: () => void
}

const useAddToEndAction = ({ dataArray, actionValue, operation, controls, afterAction }: UseAddToEndActionProps) => {
    const addItemToEndAction = async () => {
        await controls.start(addItemToEndVariants())

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
    }

    return {
        
    }
}

export default useAddToEndAction