// Store the imgUrl of the active sample

const _initialState = '/img/loading.svg'

const imgUrl = (_imgUrl=_initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_SAMPLE_IMG':
            return URL.createObjectURL(action.response)
        default:
            return _imgUrl
    }
}

export default imgUrl
