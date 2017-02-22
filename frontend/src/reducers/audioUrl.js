// Store the audio url of the current active sample

const _initialState = ''

const audioUrl = (_audioUrl = _initialState, action) => {
    switch(action.type) {
        case 'RECEIVE_SAMPLE_AUDIO':
            return URL.createObjectURL(action.response)

        default:
            return _audioUrl
    }
}

export default audioUrl
