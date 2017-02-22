import active from './active'
import counter from './counter'
import samples from './samples'
import imgUrl from './imgUrl'
import audioUrl from './audioUrl'
import fetching from './fetching'
import { combineReducers } from 'redux'
import { reducer as formReducers } from 'redux-form'

const initialState = {
    samples: [{
        id: 1,
        word: '',
        sample: '/audio/test.wav',
        img: '/img/loading.svg'
    }],
    active: 0,
    counter: 0,
    fetching: false,
    imgUrl: '',
    audioUrl: ''
}

// the root reducer delegating actions to different reducers
const validationReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_SAMPLES':
            return {
                active: active(state.active, action, Object.keys(state.samples).length),
                samples: samples(state.samples, action),
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: state.fetching
            }
        case 'FETCHING':
            return {
                active: active(state.active, action, Object.keys(state.samples).length),
                samples: state.samples,
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: fetching(state.fetching, action)
            }
        case 'VALIDATE_SAMPLE': 
            return {
                active: active(state.active, action, Object.keys(state.samples).length),
                samples: state.samples,
                counter: counter(state.counter, action),
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: state.fetching
            }
        case 'RECEIVE_SAMPLE_IMG':
            return {
                active: state.active,
                samples: state.samples,
                counter: state.counter,
                imgUrl: imgUrl(state.imgUrl, action),
                audioUrl: state.audioUrl,
                fetching: state.fetching
            }
        case 'RECEIVE_SAMPLE_AUDIO':
            return {
                active: state.active,
                samples: state.samples,
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: audioUrl(state.audioUrl, action),
                fetching: state.fetching
            }
        default: return state
    }
}

const validationApp = combineReducers({validationReducer, form: formReducers })

export default validationApp
