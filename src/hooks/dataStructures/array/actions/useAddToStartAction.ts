import { useState, useEffect } from 'react'
import { AnimationControls } from 'framer-motion'
import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"
import useAddToStartVariant from '../variants/useAddToStartVariant'

interface UseAddToStartActionProps {
    dataArray: ArrayItem[]
    actionValue: number 
    controls: AnimationControls
    actionIndex: number
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    afterAction: () => void
}

const useAddToStartAction = ({ 
        dataArray, setDataArray ,
        actionValue, 
        controls, 
        afterAction, 
        actionIndex, setActionIndex, 
    }: UseAddToStartActionProps) => {

    const [addToStartOperation, setAddToStartOperation] = useState(false)
    const addToStartVariant = useAddToStartVariant({ actionIndex })

    useEffect(() => {
        if (addToStartOperation) addToStartAction()
    }, [dataArray, addToStartOperation])

    const handleAddToStart = () => {
        const ndataArray = [...dataArray]
        ndataArray.unshift({ id: Math.random(), val: actionValue})

        setActionIndex(0)
        setDataArray(ndataArray)
        setAddToStartOperation(true)
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