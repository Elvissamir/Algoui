import { purple, white } from "../../../../variants/colors"

interface UseRemoveFromPositionVariantProps {
    actionIndex: number
}

const useRemoveFromPositionVariant = ({ actionIndex }: UseRemoveFromPositionVariantProps) => {
    const removeFromPositionVariant = () => {
        return (i: number) => ({
            color: i === actionIndex? [white, white, white, purple] : purple,
            backgroundColor: i === actionIndex? [purple, purple, purple, white] : white,
            opacity:  i === actionIndex? [1, 0, 1, 0] : 1,
            y: i === actionIndex? [0, 70] : 0,
            transition:  { delay: i === actionIndex? 0.05 : i * 0.025 },
        })
    }

    return removeFromPositionVariant
}

export default useRemoveFromPositionVariant