import { AnimationControls } from "framer-motion"
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useRemoveFromEndVariant from "../variants/useRemoveFromEndVariant"

interface UseRemoveFromEndAction {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    controls: AnimationControls
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
}

const useRemoveFromEndAction = ({ 
        dataArray, setDataArray,
        setOperation, controls
    }: UseRemoveFromEndAction) => {
    
    const removeFromEndVariant = useRemoveFromEndVariant({ dataArray })

    const handleRemoveFromEnd = async () => {
        await controls.start(removeFromEndVariant())

        setOperation('remove-end')
        handleRemoveFromEndAction()
    }

    const handleRemoveFromEndAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.pop()

        setDataArray(ndataArray)
    }

    return {
        handleRemoveFromEnd
    }
}

export default useRemoveFromEndAction