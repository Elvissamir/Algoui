import { Transition } from "framer-motion"
import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"

interface UseArrayVariantsProps {
    dataArray: ArrayItem[]
    actionIndex: number
}

const useArrayVariants = ({ dataArray, actionIndex }: UseArrayVariantsProps) => {

    const removeFromStartVariants = () => {
        return (i: number) => ({
            color: i === 0? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === 0? '#312e81' : '#ffff',
            opacity: i === 0? [1,0,1,0] : 1,
            position: i === 0? 'absolute' : 'static',
            x: i === 0? -50 : 0,
            transition: { delay: i === 0? 0.05 : i * 0.025 },
        })
    }

    const removeFromEndVariants = () => {
        return (i: number) => ({
            color: i === dataArray.length - 1? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === dataArray.length - 1? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            opacity: i === dataArray.length - 1? [0, 1, 0, 1] : 1,
            x: i === dataArray.length - 1? 50 : 0,
            transition: { delay: i === dataArray.length - 1? 0.05 : i * 0.025 },
        })
    }

    const multiplyByVariants = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? ['#312e81', '#fff'] : '#fff',
            color: i === actionIndex? [ '#fff', '#000000'] : '#000000',
            transition: { duration: 0.2 }
        })
    }

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