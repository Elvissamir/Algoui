import { purple, white } from "../../../../variants/colors"

interface UseFilterVariantProps {
    actionIndex: number
}

const useFilterVariant = ({ actionIndex }: UseFilterVariantProps) => {
    const filterVariant = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? [purple, white] : white,
            color: i === actionIndex? [ white, purple] : purple,
            transition: { duration: 0.2 }
        })
    }

    return filterVariant
}

export default useFilterVariant