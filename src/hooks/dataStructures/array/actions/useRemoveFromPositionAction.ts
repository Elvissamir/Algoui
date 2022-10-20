import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"

interface UseRemoveFromPositionActionProps {
    dataArray: ArrayItem[]
}

const useRemoveFromPositionAction = () => {
    const handleRemoveFromPosition = async () => {
        await controls.start(removeItemFromPositionVariants())

        setOperation('remove-from')
        handleRemoveFromPositionAction()
    }

    const handleRemoveFromPositionAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.splice(actionIndex, 1)

        setDataArray(ndataArray)
    }
}

export default useRemoveFromPositionAction