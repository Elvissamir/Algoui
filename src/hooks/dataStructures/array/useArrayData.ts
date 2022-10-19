import { ArrayItem, ArrayOperation } from "../../../core/dataStructures/ArrayDS"

interface InitialArrayState {
    data: ArrayItem[],
    operation: ArrayOperation,
    value: number,
    index: number,
    factor: number,
    lowVal: number,
    highVal: number
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
    operation: null,
    value: 0,
    index: 0,
    factor: 2,
    lowVal: 0,
    highVal: 5
}

const useArrayData = () => {

    return {
        initialState,
        initialArrayData
    }
}

export default useArrayData