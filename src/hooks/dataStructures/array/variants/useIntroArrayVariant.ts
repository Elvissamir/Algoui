const useIntroArrayVariant = () => {
    const introArrayVariant = () => {
        return (i: number) => ({
            opacity: [0, 1],
            x: [-50, 0],
            transition: { delay: i * 0.5 },
        })
    }

    return introArrayVariant
}

export default useIntroArrayVariant