import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"

interface UseSimpleSortProps {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
    validateArray: () => boolean
    afterAction: () => void
}

const useSimpleSortAction = ({ 
        dataArray, setDataArray, 
        setOperation, 
        afterAction,
        validateArray
    }: UseSimpleSortProps) => {

    const handleSortIncreasing = () => {
        if (!validateArray()) return 

        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => a.val - b.val)

        setDataArray(ndataArray)
        setOperation('sort-increasing')
        
        afterAction()
    }

    const handleSortDecreasing = () => {
        if (!validateArray()) return 

        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => b.val - a.val)

        setDataArray(ndataArray)
        setOperation('sort-decreasing')

        afterAction()
    }

    return {
        handleSortIncreasing, 
        handleSortDecreasing
    }
}

export default useSimpleSortAction