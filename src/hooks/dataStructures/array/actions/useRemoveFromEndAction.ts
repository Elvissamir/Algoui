import { AnimationControls } from "framer-motion"
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useRemoveFromEndVariant from "../variants/useRemoveFromEndVariant"

interface UseRemoveFromEndAction {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    controls: AnimationControls
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    validateArray: () => boolean
    afterAction: () => void
}

const useRemoveFromEndAction = ({ 
        dataArray, setDataArray,
        setOperation, controls,
        afterAction,
        validateArray
    }: UseRemoveFromEndAction) => {
    
    const removeFromEndVariant = useRemoveFromEndVariant({ dataArray })

    const handleRemoveFromEndAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.pop()

        setDataArray(ndataArray)
        afterAction()
    }

    const handleRemoveFromEnd = async () => {
        if (!validateArray()) return 

        await controls.start(removeFromEndVariant())

        setOperation('remove-end')
        handleRemoveFromEndAction()
    }

    return {
        handleRemoveFromEnd
    }
}

export default useRemoveFromEndAction