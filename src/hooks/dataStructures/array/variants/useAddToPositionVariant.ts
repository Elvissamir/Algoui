import { purple, white } from "../../../../variants/colors"

interface UseAddToPositionVariantProps {
    actionIndex: number 
}

const useAddToPositionVariant = ({ actionIndex }: UseAddToPositionVariantProps) => {
    const addToPositionVariant = () => {
        const y = (index: number): number | number[] => {
            if (index < actionIndex) return 0

            if (index > actionIndex) return 0

            return [70, 0]
        }

        return (i: number) => ({
            color: i === actionIndex? [white, white, white, purple] : purple,
            backgroundColor: i === actionIndex? [purple, purple, purple, white] : white,
            y: y(i),
            transition: { delay: i === 0? 0.05 : i * 0.025 },
        })
    }

    return addToPositionVariant
}

export default useAddToPositionVariant