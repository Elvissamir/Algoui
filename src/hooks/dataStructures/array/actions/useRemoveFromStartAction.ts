import { AnimationControls } from "framer-motion"
import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"
import useRemoveFromStartVariant from "../variants/useRemoveFromStartVariant"

interface UseRemoveFromStartProps {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    controls: AnimationControls
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    validateArray: () => boolean
    afterAction: () => void
}

const useRemoveFromStartAction = ({ 
        dataArray, setDataArray, 
        controls, setOperation,
        afterAction,
        validateArray,
    }: UseRemoveFromStartProps) => {

    const removeFromStartVariant = useRemoveFromStartVariant()

    const removeFromStartAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.shift()

        setDataArray(ndataArray)
        afterAction()
    }  

    const handleRemoveFromStart = async () => {
        if (!validateArray()) return 

        await controls.start(removeFromStartVariant())

        setOperation('remove-start')
        removeFromStartAction()
    }

    return {
        removeFromStartAction,
        handleRemoveFromStart,
    }
}

export default useRemoveFromStartAction