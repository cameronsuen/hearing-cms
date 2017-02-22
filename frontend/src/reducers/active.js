// Active refers to the index of the currently examined (active) sample
const _initialActive = -1

const active = (_active=_initialActive, action, samplesLength=0) => {
    switch (action.type) {
        case 'RECEIVE_SAMPLES':
            return _initialActive
        case 'FETCHING':
            // If the system is about to fetch another sample, increase counter by 1
            if (action.isFetching){

                // The the index of current active sample should not go beyond 5
                return Math.min(samplesLength-1, _active + 1)
            }
            else
                return _active
        default:
            return _active
    }
}

export default active
