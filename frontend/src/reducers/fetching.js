const _initialState = false

const fetching = (state = _initialState, action) => {
    switch (action.type) {
        case 'FETCHING':
            return action.isFetching

        default:
            return state
    }
}

export default fetching
