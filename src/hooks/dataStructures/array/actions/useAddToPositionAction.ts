const useAddToPositionAction = () => {
    const addToPositionAction = async () => {
        await controls.start(addItemToPositionVariants())

        restoreAfterAction()
    }

    useEffect(() => {
        if (operation === 'add-to') addToPositionAction()
    }, [dataArray, operation])

    const handleAddToPosition = () => {
        if (actionIndex === 0) return handleAddToStart()
        
        if (actionIndex >= dataArray.length - 1) return handleAddToEnd()

        const ndataArray = [...dataArray]

        setActionIndex(actionIndex)
        
        ndataArray.splice(actionIndex, 0, { id: Math.random(), val: actionValue})
        setDataArray(ndataArray)
        setOperation('add-to')
    }
}

export default useAddToPositionAction