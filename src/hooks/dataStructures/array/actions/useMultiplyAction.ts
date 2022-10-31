import { AnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useMultiplyVariant from "../variants/useMultiplyVariant"

interface UseMultiplyActionProps {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    factor: number 
    operation: ArrayOperation,
    controls: AnimationControls
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    executingOperation: boolean 
    setExecutingOperation: React.Dispatch<React.SetStateAction<boolean>>
    validateArray: () => boolean
    afterAction: () => void
}

const useMultiplyAction = ({ 
        dataArray, setDataArray,
        operation, setOperation,
        setExecutingOperation,
        factor, controls,
        afterAction,
        validateArray
    }: UseMultiplyActionProps) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const multiplyByVariant = useMultiplyVariant({ actionIndex: currentIndex })

    const multiplyAction = async () => {
        const ndataArray = [...dataArray]

        ndataArray[currentIndex].val = ndataArray[currentIndex].val * factor
        
        await controls.start(multiplyByVariant())
        
        setCurrentIndex(currentIndex + 1)
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
            if (currentIndex < dataArray.length) {
                const stepTimer = multiplyStepAction()

                return () => clearInterval(stepTimer)
            }

            setCurrentIndex(0)
            afterAction()
        }
    }, [dataArray, operation])

    const handleMultiply = async () => {
        if (!validateArray()) return 

        multiplyAction()
        setOperation('multipy')
        setExecutingOperation(true)
    }

    return {
        handleMultiply
    }
}

export default useMultiplyAction