import { useEffect } from 'react'
import { AnimationControls } from 'framer-motion'
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useAddToStartVariant from '../variants/useAddToStartVariant'

interface UseAddToStartActionProps {
    dataArray: ArrayItem[]
    actionValue: number 
    controls: AnimationControls
    operation: ArrayOperation
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    actionIndex: number
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    setExecutingOperation: React.Dispatch<React.SetStateAction<boolean>>
    afterAction: () => void
}

const useAddToStartAction = ({ 
        dataArray, setDataArray ,
        actionValue, 
        controls, 
        operation,
        setOperation, 
        afterAction, 
        actionIndex, setActionIndex, 
        setExecutingOperation
    }: UseAddToStartActionProps) => {

    const addToStartVariant = useAddToStartVariant({ actionIndex })

    useEffect(() => {
        if (operation === 'add-start') addToStartAction()
    }, [dataArray, operation])

    const handleAddToStart = () => {
        const ndataArray = [...dataArray]
        ndataArray.unshift({ id: Math.random(), val: actionValue})

        setActionIndex(0)
        setDataArray(ndataArray)
        setOperation('add-start')
        setExecutingOperation(true)
    }

    const addToStartAction = async () => {
        await controls.start(addToStartVariant())

        afterAction()
    }

    return {
        handleAddToStart
    }
}

export default useAddToStartAction