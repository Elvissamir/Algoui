import { useState } from 'react'
import { ArrayItem } from "../../../core/dataStructures/ArrayDS"

interface InitialArrayState {
    data: ArrayItem[],
    value: number,
    index: number,
}

const initialArrayData = [
    { id: Math.random(), val: 7 },
    { id: Math.random(), val: 1 },
    { id: Math.random(), val: 2 },
    { id: Math.random(), val: 3 },
    { id: Math.random(), val: 4 },
    { id: Math.random(), val: 5 },
    { id: Math.random(), val: 6 },
]

const initialState: InitialArrayState = {
    data: initialArrayData,
    value: 0,
    index: 0,
}

const useArrayData = () => {
    const [ dataArray, setDataArray ] = useState(initialState.data.map(item => { return {...item} }))
    const [ actionValue, setActionValue ] = useState(initialState.value)
    const [ actionIndex, setActionIndex ] = useState(initialState.index)

    return {
        initialState,
        initialArrayData,
        dataArray, setDataArray,
        actionValue, setActionValue,
        actionIndex, setActionIndex
    }
}

export default useArrayData