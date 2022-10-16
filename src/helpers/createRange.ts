const createRange = (start: number, end: number) => {
    const range = []

    if (start < end) {
        for (let i = start; i <= end; i++)
            range.push(i)
    }
    else {
        for (let i = start; i >= end; i--)
        range.push(i)
    }

    return range
}
export default createRange