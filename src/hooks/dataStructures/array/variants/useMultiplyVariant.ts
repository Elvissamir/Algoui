interface UseMultiplyVariantProps {
    actionIndex: number
}

const useMultiplyVariant = ({ actionIndex }: UseMultiplyVariantProps) => {
    const multiplyByVariant = () => {
        return (i: number) => ({
            opacity: i === actionIndex ? 1 : 1,
            backgroundColor: i === actionIndex? ['#312e81', '#fff'] : '#fff',
            color: i === actionIndex? [ '#fff', '#000000'] : '#000000',
            transition: { duration: 0.2 }
        })
    }

    return multiplyByVariant
}

export default useMultiplyVariant