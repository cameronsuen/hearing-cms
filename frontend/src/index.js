import React from 'react'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'
import redirect from './middleware/redirect'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import validationApp from './reducers'
import { fetchSamples } from './actions'
import Root from './components/Root'

let store = createStore(
    validationApp,
    composeWithDevTools(
        applyMiddleware(
            // This middleware allows us to dispatch functions as actions
            thunkMiddleware,

            // This middleware allows us to make API requests easily
            api,

            // This middleware redirects users 
            redirect
        )
    )
)

render(
    <Root store={store} />,
	document.getElementById('root')
)
