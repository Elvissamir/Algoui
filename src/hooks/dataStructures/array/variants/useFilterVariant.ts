interface UseFilterVariantProps {
    actionIndex: number
}

const useFilterVariant = ({ actionIndex }: UseFilterVariantProps) => {
    const filterVariant = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? ['#312e81', '#fff'] : '#fff',
            color: i === actionIndex? [ '#fff', '#000000'] : '#000000',
            transition: { duration: 0.2 }
        })
    }

    return filterVariant
}

export default useFilterVariant