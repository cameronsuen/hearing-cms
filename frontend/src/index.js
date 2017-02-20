import React from 'react'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import validationApp from './reducers'
import { fetchSamples } from './actions'
import Root from './components/Root'

let store = createStore(
    validationApp,
    applyMiddleware(
        // This middleware allows us to dispatch functions as actions
        thunkMiddleware,

        // This middleware allows us to make API requests easily
        api
    )
)

store.dispatch(fetchSamples()).then(() => 
    console.log(store.getState())
)


render(
    <Root store={store} />,
	document.getElementById('root')
)
