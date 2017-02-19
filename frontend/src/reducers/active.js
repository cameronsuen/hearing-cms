// Active refers to the index of the currently examined (active) sample
const _initialActive = 0

const active = (_active=_initialActive, action, samplesLength=0) => {
    switch (action.type) {
        case 'RECEIVE_SAMPLES':
            return _initialActive
        case 'VALIDATE_SAMPLE':
            // The the index of current active sample should not go beyond 5
            return Math.min(samplesLength-1, _active + 1)
        default:
            return _active
    }
}

export default active
