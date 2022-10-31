import { useEffect, useState } from 'react'
import { AnimationControls } from "framer-motion"
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useFilterVariant from '../variants/useFilterVariant'

interface UseFilterActionProps {
    dataArray: ArrayItem[]
    setDataArray:  React.Dispatch<React.SetStateAction<ArrayItem[]>>
    lowLimit: number 
    includeLowLimit: boolean
    highLimit: number 
    includeHighLimit: boolean 
    controls: AnimationControls
    operation: ArrayOperation
    setOperation:  React.Dispatch<React.SetStateAction<ArrayOperation>>
    setExecutingOperation: React.Dispatch<React.SetStateAction<boolean>>
    validateArray: () => boolean
    afterAction: () => void
}

const useFilterAction = ({ 
        dataArray, setDataArray,
        lowLimit, highLimit,
        operation, setOperation,
        includeHighLimit, includeLowLimit,
        controls, afterAction,
        setExecutingOperation,
        validateArray
    }: UseFilterActionProps) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const filterVariant = useFilterVariant({ actionIndex: currentIndex })

    const filterItemsAction = async () => {
        const ndataArray = [...dataArray]

        if ((dataArray[currentIndex].val > highLimit && includeHighLimit) || (includeLowLimit && dataArray[currentIndex].val < lowLimit)) {
            const ndataArray = [...dataArray]
            ndataArray.splice(currentIndex, 1)

            await controls.start(filterVariant())

            return setDataArray(ndataArray)
        }

        await controls.start(filterVariant())

        setCurrentIndex(currentIndex + 1)
        setDataArray(ndataArray)
    }

    const filterStepAction = () => {
        const timer = setInterval(async () => {
            await filterItemsAction()
        }, 650)

        return timer
    }

    useEffect(() => {
        if (operation === 'filter') {
            if (currentIndex < dataArray.length) {
                const stepTimer = filterStepAction()

                return () => clearInterval(stepTimer)
            }

            setCurrentIndex(0)
            afterAction()
        }
    }, [dataArray, operation])

    const handleFilter = async () => {
        if (!validateArray()) return

        filterItemsAction()
        setOperation('filter')
        setExecutingOperation(true)
    }

    return {
        handleFilter
    }
}

export default useFilterAction