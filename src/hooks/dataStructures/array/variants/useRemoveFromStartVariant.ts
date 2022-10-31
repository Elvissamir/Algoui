import { Variant } from "framer-motion"
import { purple, white } from "../../../../variants/colors"

const useRemoveFromStartVariant = () => {
    const variant: Variant = {}

    const removeFromStartVariant = () => {
        return (i: number) => { 
            variant.color = i === 0? [white, white, white, purple] : purple
            variant.backgroundColor = i === 0? purple : white
            variant.opacity = i === 0? [1,0,1,0] : 1
            variant.x = i === 0? -50 : 0
            variant.transition = { delay: i === 0? 0.05 : i * 0.025 }

            return variant
        }
    }

    return removeFromStartVariant
}

export default useRemoveFromStartVariant