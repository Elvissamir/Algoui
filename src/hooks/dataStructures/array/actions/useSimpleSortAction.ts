import { ArrayItem, ArrayOperation } from "../../../../core/dataStructures/ArrayDS"

interface UseSimpleSortProps {
    dataArray: ArrayItem[]
    setDataArray: React.Dispatch<React.SetStateAction<ArrayItem[]>>
    setOperation: React.Dispatch<React.SetStateAction<ArrayOperation>>
}

const useSimpleSortAction = ({ dataArray, setDataArray, setOperation }: UseSimpleSortProps) => {
    const handleSortIncreasing = () => {
        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => a.val - b.val)

        setDataArray(ndataArray)
        setOperation('sort-increasing')
    }

    const handleSortDecreasing = () => {
        const ndataArray = [...dataArray]
        ndataArray.sort((a, b) => b.val - a.val)

        setDataArray(ndataArray)
        setOperation('sort-decreasing')
    }

    return {
        handleSortIncreasing, 
        handleSortDecreasing
    }
}

export default useSimpleSortAction