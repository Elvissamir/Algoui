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
            color: i === actionIndex? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === actionIndex? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            y: y(i),
            transition: { delay: i === 0? 0.05 : i * 0.025 },
        })
    }

    return addToPositionVariant
}

export default useAddToPositionVariant