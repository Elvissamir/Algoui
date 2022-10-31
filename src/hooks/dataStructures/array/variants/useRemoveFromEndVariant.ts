import { ArrayItem } from "../../../../core/dataStructures/ArrayDS"
import { purple, white } from "../../../../variants/colors"

interface UseRemoveFromEndVariantProps {
    dataArray: ArrayItem[]
}

const useRemoveFromEndVariant = ({ dataArray }: UseRemoveFromEndVariantProps) => {
    const removeFromEndVariant = () => {
        return (i: number) => ({
            color: i === dataArray.length - 1? [white, white, white, purple] : purple,
            backgroundColor: i === dataArray.length - 1? [purple, purple, purple, white] : white,
            opacity: i === dataArray.length - 1? [0, 1, 0, 1] : 1,
            x: i === dataArray.length - 1? 50 : 0,
            transition: { delay: i === dataArray.length - 1? 0.05 : i * 0.025 },
        })
    }

    return removeFromEndVariant
}

export default useRemoveFromEndVariant