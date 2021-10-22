
const initState = {
    todoArr: [], doneArr: []
}
export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'sendType':
            state.todoArr.push({ value: action.value, done: false })
            return Object.assign({}, state)
        case 'addDone':
            state.doneArr.push(Object.assign({}, state.todoArr[action.index], { done: true }))
            state.todoArr.splice(action.index, 1)
            return Object.assign({}, state)
        case 'cancelDone':
            state.todoArr.push(Object.assign({}, state.doneArr[action.index], { done: false }))
            state.doneArr.splice(action.index, 1)
            return Object.assign({}, state)
        case 'remove':
            console.log(action);
            if (action.arrIndex === 0) {
                state.todoArr.splice(action.index, 1)
            }else{
                state.doneArr.splice(action.index, 1)
            }
            return Object.assign({}, state)
    }

}