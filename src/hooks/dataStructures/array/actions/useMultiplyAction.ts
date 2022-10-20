const useMultiplyAction = () => {
    const multiplyAction = async () => {
        const ndataArray = [...dataArray]

        ndataArray[actionIndex].val = ndataArray[actionIndex].val * factor
        
        await controls.start(multiplyByItemVariants())

        setActionIndex(actionIndex + 1)
        setDataArray(ndataArray)
    }

    const multiplyStepAction = () => {
        const timer = setInterval(async () => {
            await multiplyAction()
        }, 650)

        return timer
    }

    useEffect(() => {
        if (operation === 'multipy') {
            if (actionIndex < dataArray.length) {
                const stepTimer = multiplyStepAction()

                return () => clearInterval(stepTimer)
            }

            restoreAfterAction()
        }
    }, [dataArray, operation])

    const handleMultiply = async () => {
        multiplyAction()

        setOperation('multipy')
        setExecutingOperation(true)
    }
}

export default useMultiplyAction