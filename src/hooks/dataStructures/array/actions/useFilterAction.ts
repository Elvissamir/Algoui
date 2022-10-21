import { useEffect } from 'react'
import { AnimationControls } from "framer-motion"
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useFilterVariant from '../variants/useFilterVariant'

interface UseFilterActionProps {
    dataArray: ArrayItem[]
    setDataArray:  React.Dispatch<React.SetStateAction<ArrayItem[]>>
    actionIndex: number 
    lowLimit: number 
    includeLowLimit: boolean
    highLimit: number 
    includeHighLimit: boolean 
    controls: AnimationControls
    setActionIndex: React.Dispatch<React.SetStateAction<number>>
    operation: ArrayOperation
    setOperation:  React.Dispatch<React.SetStateAction<ArrayOperation>>
    afterAction: () => void
}

const useFilterAction = ({ 
        dataArray, setDataArray,
        actionIndex, setActionIndex,
        lowLimit, highLimit,
        operation, setOperation,
        includeHighLimit, includeLowLimit,
        controls, afterAction
    }: UseFilterActionProps) => {

    const filterVariant = useFilterVariant({ actionIndex })

    const filterItemsAction = async () => {
        const ndataArray = [...dataArray]

        if ((dataArray[actionIndex].val > highLimit && includeHighLimit) || (includeLowLimit && dataArray[actionIndex].val < lowLimit)) {
            const ndataArray = [...dataArray]
            ndataArray.splice(actionIndex, 1)

            await controls.start(filterVariant())

            return setDataArray(ndataArray)
        }

        await controls.start(filterVariant())

        setActionIndex(actionIndex + 1)
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
            if (actionIndex < dataArray.length) {
                const stepTimer = filterStepAction()

                return () => clearInterval(stepTimer)
            }

            afterAction()
        }
    }, [dataArray, operation])

    const handleFilter = async () => {
        filterItemsAction()
        setOperation('filter')
    }

    return {
        handleFilter
    }
}

export default useFilterAction