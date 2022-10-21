const useRemoveFromStartVariant = () => {
    const removeFromStartVariants = () => {
        return (i: number) => ({
            color: i === 0? ['#ffff', '#ffff', '#ffff', '#000000'] : '#000000',
            backgroundColor: i === 0? '#312e81' : '#ffff',
            opacity: i === 0? [1,0,1,0] : 1,
            position: i === 0? 'absolute' : 'static',
            x: i === 0? -50 : 0,
            transition: { delay: i === 0? 0.05 : i * 0.025 },
        })
    }

    return removeFromStartVariants
}

export default useRemoveFromStartVariant