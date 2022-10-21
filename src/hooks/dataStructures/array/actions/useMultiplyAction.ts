import { AnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useMultiplyVariant from "../variants/useMultiplyVariant"

interface UseMultiplyActionProps {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    actionIndex: number 
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
    factor: number 
    operation: ArrayOperation,
    controls: AnimationControls
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    executingOperation: boolean 
    setExecutingOperation: React.Dispatch<React.SetStateAction<boolean>>
    afterAction: () => void
}

const useMultiplyAction = ({ 
        dataArray, setDataArray,
        actionIndex, setActionIndex,
        operation, setOperation,
        setExecutingOperation,
        factor, controls,
        afterAction
    }: UseMultiplyActionProps) => {

    const multiplyByVariant = useMultiplyVariant({ actionIndex })

    const multiplyAction = async () => {
        const ndataArray = [...dataArray]

        ndataArray[actionIndex].val = ndataArray[actionIndex].val * factor
        
        await controls.start(multiplyByVariant())

        setActionIndex(actionIndex + 1)
        setDataArray(ndataArray)
    }

    const multiplyStepAction = () => {
        const timer = setInterval(async () => {
            await multiplyAction()
        }, 650)

        return timer
    }

    useEffect(() => {
        if (operation === 'multipy') {
            if (actionIndex < dataArray.length) {
                const stepTimer = multiplyStepAction()

                return () => clearInterval(stepTimer)
            }

            afterAction()
        }
    }, [dataArray, operation])

    const handleMultiply = async () => {
        multiplyAction()

        setOperation('multipy')
        setExecutingOperation(true)
    }

    return {
        handleMultiply
    }
}

export default useMultiplyAction