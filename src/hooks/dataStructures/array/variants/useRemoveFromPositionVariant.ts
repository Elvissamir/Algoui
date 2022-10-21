interface UseRemoveFromPositionVariantProps {
    actionIndex: number
}

const useRemoveFromPositionVariant = ({ actionIndex }: UseRemoveFromPositionVariantProps) => {
    const removeFromPositionVariant = () => {
        return (i: number) => ({
            color: i === actionIndex? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === actionIndex? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            opacity:  i === actionIndex? [1, 0, 1, 0] : 1,
            y: i === actionIndex? [0, 70] : 0,
            transition:  { delay: i === actionIndex? 0.05 : i * 0.025 },
        })
    }

    return removeFromPositionVariant
}

export default useRemoveFromPositionVariant