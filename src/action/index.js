export const sendAction = (value) => {
    return {
        type: 'sendType',
        value,
    }
}
export const addDone = (index) => {
    return {
        type: 'addDone',
        index,
    }
}
export const cancelDone = (index) => {
    return {
        type: 'cancelDone',
        index,
    }
}
export const removeItem = (index,arrIndex) => {
    return {
        type: 'remove',
        index,
        arrIndex
    }
}