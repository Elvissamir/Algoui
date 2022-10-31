import { purple, white } from "../../../../variants/colors"

interface UseAddToStartVariantProps {
    actionIndex: number
}

const useAddToStartVariant = ({ actionIndex }: UseAddToStartVariantProps) => {
    const addToStartVariants = () => {
        return (i: number) => ({
            color: i === actionIndex? [white, white, white, purple] : purple,
            backgroundColor: i === actionIndex? [purple, purple, purple, white] : white,
            opacity: i === actionIndex? [0, 1, 1, 1] : 1,
            x: i === actionIndex? [-50, 0] : 0,
            transition: { delay: i === actionIndex? 0.05 : i * 0.025, bounce: 0 },
        })
    }

    return addToStartVariants
}

export default useAddToStartVariant