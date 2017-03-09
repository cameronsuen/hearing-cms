import active from './active'
import audioUrl from './audioUrl'
import counter from './counter'
import fetching from './fetching'
import imgUrl from './imgUrl'
import samples from './samples'
import search from './search'
import role from './role'
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
    audioUrl: '',
    role: parseInt(localStorage.getItem('role')) || 0
}

// the root reducer delegating actions to different reducers
const validationReducer = (state=initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'REDIRECT_TO_HOME':
            return {
                role: role(state.role, action),
                active: state.active,
                samples: state.samples,
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: state.fetching,
                search: state.search
            }
        case 'LOGOUT':
            return {
                role: role(state.role, action),
                active: state.active,
                samples: state.samples,
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: state.fetching,
                search: state.search
            }
        case 'RECEIVE_SAMPLES':
            return {
                role: state.role,
                active: active(state.active, action, Object.keys(state.samples).length),
                samples: samples(state.samples, action),
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: state.fetching,
                search: state.search
            }
        case 'FETCHING':
            return {
                role: state.role,
                active: active(state.active, action, Object.keys(state.samples).length),
                samples: state.samples,
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: fetching(state.fetching, action),
                search: state.search
            }
        case 'VALIDATE_SAMPLE': 
            return {
                role: state.role,
                active: active(state.active, action, Object.keys(state.samples).length),
                samples: state.samples,
                counter: counter(state.counter, action),
                imgUrl: state.imgUrl,
                audioUrl: state.audioUrl,
                fetching: state.fetching,
                search: state.search
            }
        case 'RECEIVE_SAMPLE_IMG':
            return {
                role: state.role,
                active: state.active,
                samples: state.samples,
                counter: state.counter,
                imgUrl: imgUrl(state.imgUrl, action),
                audioUrl: state.audioUrl,
                fetching: state.fetching,
                search: state.search
            }
        case 'RECEIVE_SAMPLE_AUDIO':
            return {
                role: state.role,
                active: state.active,
                samples: state.samples,
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: audioUrl(state.audioUrl, action),
                fetching: state.fetching,
                search: state.search
            }
        case 'DISPLAY_RESULTS':
            return {
                role: state.role,
                active: state.active,
                samples: state.samples,
                counter: state.counter,
                imgUrl: state.imgUrl,
                audioUrl: audioUrl(state.audioUrl, action),
                fetching: state.fetching,
                search: search(state.search, action)
            }
        default: return state
    }
}

const validationApp = combineReducers({validationReducer, form: formReducers })

export default validationApp
