import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"

interface UseRemoveFromEndVariantProps {
    dataArray: ArrayItem[]
}

const useRemoveFromEndVariant = ({ dataArray }: UseRemoveFromEndVariantProps) => {
    const removeFromEndVariant = () => {
        return (i: number) => ({
            color: i === dataArray.length - 1? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === dataArray.length - 1? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            opacity: i === dataArray.length - 1? [0, 1, 0, 1] : 1,
            x: i === dataArray.length - 1? 50 : 0,
            transition: { delay: i === dataArray.length - 1? 0.05 : i * 0.025 },
        })
    }

    return removeFromEndVariant
}

export default useRemoveFromEndVariant