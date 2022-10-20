import { useState, useEffect } from 'react'
import { AnimationControls } from 'framer-motion'
import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"
import useArrayVariants from '../variants/useArrayVariants'

interface UseAddToStartActionProps {
    dataArray: ArrayItem[]
    actionValue: number 
    controls: AnimationControls
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    afterAction: () => void
}

const useAddToStartAction = ({ dataArray, actionValue, controls, afterAction, setActionIndex, setDataArray }: UseAddToStartActionProps) => {
    const [addToStartOperation, setAddToStartOperation] = useState(false)
    const { addToStartVariants } = useArrayVariants({ dataArray, actionIndex: 0 })

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
        await controls.start(addToStartVariants())

        afterAction()
    }

    return {
        handleAddToStart
    }
}

export default useAddToStartAction