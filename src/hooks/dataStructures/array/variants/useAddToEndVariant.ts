interface UseAddToEndVariantProps {
    actionIndex: number
}

const useAddToEndVariant = ({ actionIndex }: UseAddToEndVariantProps) => {
    const addToEndVariants = () => {
        return (i: number) => ({
            color: i === actionIndex? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === actionIndex? ['#312e81', '#312e81', '#312e81', '#ffff'] : '#ffff',
            opacity: i === actionIndex? [0, 1] : 1,
            x: i === actionIndex? [50, 50,  0] : 0,
            transition: { delay: i === actionIndex? 0.05 : i * 0.025 }
        })
    }

    return addToEndVariants
}

export default useAddToEndVariant