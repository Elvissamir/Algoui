import { purple, white } from "../../../../variants/colors"

interface UseAddToEndVariantProps {
    actionIndex: number
}

const useAddToEndVariant = ({ actionIndex }: UseAddToEndVariantProps) => {
    const addToEndVariants = () => {
        return (i: number) => ({
            color: i === actionIndex? [white, white , white, purple] : purple,
            backgroundColor: i === actionIndex? [purple, purple, purple, white] : white,
            opacity: i === actionIndex? [0, 1] : 1,
            x: i === actionIndex? [50, 50,  0] : 0,
            transition: { delay: i === actionIndex? 0.05 : i * 0.025 }
        })
    }

    return addToEndVariants
}

export default useAddToEndVariant