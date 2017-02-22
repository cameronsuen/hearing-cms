const _initialState = 0

const role = (state = _initialState, action) => {
    switch (action.type) {
        case 'REDIRECT_TO_HOME':
            return action.response.role

        case 'LOGOUT':
            return _initialState

        default:
            return state
    }
}

export default role
