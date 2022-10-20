const useFilterAction = () => {
    const filterItemsAction = async () => {
        const ndataArray = [...dataArray]

        if ((dataArray[actionIndex].val > highLimit && includeHigh) || (includeLow && dataArray[actionIndex].val < lowLimit)) {
            const ndataArray = [...dataArray]
            ndataArray.splice(actionIndex, 1)

            await controls.start(filterItemVariants())

            return setDataArray(ndataArray)
        }

        await controls.start(filterItemVariants())

        setActionIndex(actionIndex + 1)
        setDataArray(ndataArray)
    }

    const filterStepAction = () => {
        const timer = setInterval(async () => {
            await filterItemsAction()
        }, 650)

        return timer
    }

    useEffect(() => {
        if (operation === 'filter') {
            if (actionIndex < dataArray.length) {
                const stepTimer = filterStepAction()

                return () => clearInterval(stepTimer)
            }

            restoreAfterAction()
        }
    }, [dataArray, operation])

    const handleFilter = async () => {
        filterItemsAction()
        setOperation('filter')
    }
}

export default useFilterAction