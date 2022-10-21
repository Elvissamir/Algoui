import { useEffect } from 'react'
import { AnimationControls } from "framer-motion"
import useAddToPositionVariant from "../variants/useAddToPositionVariant"
import { ArrayItem, ArrayOperation } from '../../../../core/dataStructures/ArrayDS'

interface UseAddToPositionAtionProps {
    dataArray: ArrayItem[]
    actionIndex: number
    actionValue: number
    controls: AnimationControls
    operation: ArrayOperation
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    setExecutingOperation: React.Dispatch<React.SetStateAction<boolean>>
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
    afterAction: () => void
    handleAddToStart: () => void
    handleAddToEnd: () => void
}

const useAddToPositionAction = ({ 
        dataArray,
        actionValue,
        actionIndex, 
        controls, 
        afterAction, 
        operation, 
        setDataArray,
        setOperation,
        setExecutingOperation,
        setActionIndex,
        handleAddToStart,
        handleAddToEnd,
    }: UseAddToPositionAtionProps) => {

    const addToPositionVariant = useAddToPositionVariant({ actionIndex })

    const addToPositionAction = async () => {
        await controls.start(addToPositionVariant())

        afterAction()
    }

    useEffect(() => {
        if (operation === 'add-to') addToPositionAction()
    }, [dataArray, operation])

    const handleAddToPosition = () => {
        if (actionIndex === 0) return handleAddToStart()
        
        if (actionIndex >= dataArray.length - 1) return handleAddToEnd()

        const ndataArray = [...dataArray]

        setActionIndex(actionIndex)
        
        ndataArray.splice(actionIndex, 0, { id: Math.random(), val: actionValue})
        setDataArray(ndataArray)
        setOperation('add-to')
        setExecutingOperation(true)
    }

    return {
        handleAddToPosition
    }
}

export default useAddToPositionAction