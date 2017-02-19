const _initialCounter = 0

const counter = (_counter = _initialCounter, action) => {
    switch (action.type) {
        case 'VALIDATE_SAMPLE':
            return _counter + 1
            
        default:
            return _counter
    }
}

export default counter
