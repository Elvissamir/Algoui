import { AnimationControls } from "framer-motion"
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useRemoveFromPositionVariant from "../variants/useRemoveFromPositionVariant"

interface UseRemoveFromPositionActionProps {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    actionIndex: number
    controls: AnimationControls
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    validateArray: () => boolean
    afterAction: () => void
}

const useRemoveFromPositionAction = ({ 
        dataArray, setDataArray, 
        actionIndex,
        afterAction,
        setOperation, controls,
        validateArray
    }: UseRemoveFromPositionActionProps) => {

    const removeFromPositionVariant = useRemoveFromPositionVariant({ actionIndex })

    const handleRemoveFromPositionAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.splice(actionIndex, 1)

        setDataArray(ndataArray)
        afterAction()
    }

    const handleRemoveFromPosition = async () => {
        if (!validateArray()) return 

        await controls.start(removeFromPositionVariant())

        setOperation('remove-from')
        handleRemoveFromPositionAction()
    }

    return {
        handleRemoveFromPosition
    }
}

export default useRemoveFromPositionAction