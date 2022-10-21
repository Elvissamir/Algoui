import { Variant } from "framer-motion"

const useRemoveFromStartVariant = () => {
    const variant: Variant = {}

    const removeFromStartVariant = () => {
        return (i: number) => { 
            variant.color = i === 0? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000'
            variant.backgroundColor = i === 0? '#312e81' : '#ffff'
            variant.opacity = i === 0? [1,0,1,0] : 1
            variant.position = i === 0? 'absolute' : 'static'
            variant.x = i === 0? -50 : 0
            variant.transition = { delay: i === 0? 0.05 : i * 0.025 }

            return variant
        }
    }

    return removeFromStartVariant
}

export default useRemoveFromStartVariant