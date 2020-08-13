const selectedRowKeys = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_ROW_KEYS':
            return action.ids
        default:
            return state
    }
}

export default selectedRowKeys