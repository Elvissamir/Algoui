import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"

interface UseRemoveFromEndAction {
    dataArray: ArrayItem[]
}

const useRemoveFromEndAction = ({ dataArray }: UseRemoveFromEndAction) => {
    const handleRemoveFromEnd = async () => {
        await controls.start()

        setOperation('remove-end')
        handleRemoveFromEndAction()
    }

    const handleRemoveFromEndAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.pop()

        setDataArray(ndataArray)
    }

    return {

    }
}

export default useRemoveFromEndAction