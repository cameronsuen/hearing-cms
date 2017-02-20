import active from './active'
import counter from './counter'
import samples from './samples'
import { combineReducers } from 'redux'
import { reducer as formReducers } from 'redux-form'

const initialState = {
    samples: [{
        id: 1,
        word: 'T',
        sample: '/audio/test.wav',
        img: 'img/test.png'
    }],
    active: 0,
    counter: 0
}

// the root reducer delegating actions to different reducers
const validationReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_SAMPLES':
            return {
                active: active(state.active, action),
                samples: samples(state.samples, action),
                counter: state.counter
            }
        case 'VALIDATE_SAMPLE': 
            return {
                active: active(state.active, action, state.samples.length),
                samples: state.samples,
                counter: counter(state.counter, action)
            }
        default: return state
    }
}

const validationApp = combineReducers({validationReducer, form: formReducers })

export default validationApp
