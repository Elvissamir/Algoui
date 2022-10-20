import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"

interface UseRemoveFromStartProps {
    dataArray: ArrayItem[]
}

const useRemoveFromStart = ({ dataArray }: UseRemoveFromStartProps) => {

    const removeFromStartAction = () => {
        const ndataArray = [...dataArray]
        ndataArray.shift()

        setDataArray(ndataArray)
    }  

    const handleRemoveFromStart = async () => {
        await controls.start()

        setOperation('remove-start')
        removeFromStartAction()
    }

    return {
        removeFromStartAction,
        handleRemoveFromStart,
    }
}

export default useRemoveFromStart