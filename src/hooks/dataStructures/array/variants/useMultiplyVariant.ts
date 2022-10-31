import { purple, white } from "../../../../variants/colors"

interface UseMultiplyVariantProps {
    actionIndex: number
}

const useMultiplyVariant = ({ actionIndex }: UseMultiplyVariantProps) => {
    const multiplyByVariant = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? [purple, white] : white,
            color: i === actionIndex? [ white, purple] : purple,
            transition: { duration: 0.2 }
        })
    }

    return multiplyByVariant
}

export default useMultiplyVariant