const _initialSamples = [{
    id: 1,
    word: 'T',
    sample: '',
    img: '/img/loading.svg'
}]

const samples = (_samples=_initialSamples, action) => {
    switch (action.type) {
        case 'RECEIVE_SAMPLES':
            return action.response
        default:
            return _samples
    }
}

export default samples
