const _initialSamples = [{
    id: 1,
    word: 'T',
    sample: '',
    img: 'img/sample.png'
}]

const samples = (_samples=_initialSamples, action) => {
    switch (action.type) {
        case 'RECEIVE_SAMPLES':
            return action.samples
        default:
            return _samples
    }
}

export default samples
