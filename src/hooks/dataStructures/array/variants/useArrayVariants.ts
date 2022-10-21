import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"

interface UseArrayVariantsProps {
    dataArray: ArrayItem[]
    actionIndex: number
}

const useArrayVariants = ({ dataArray, actionIndex }: UseArrayVariantsProps) => {

    const filterVariants = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? ['#312e81', '#fff'] : '#fff',
            color: i === actionIndex? [ '#fff', '#000000'] : '#000000',
            transition: { duration: 0.2 }
        })
    }

    return {
        removeFromStartVariants,
        removeFromPositionVariants,
        removeFromEndVariants,
        multiplyByVariants,
        filterVariants,
    }
}

export default useArrayVariants