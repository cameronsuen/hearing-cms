import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import PopulatedLoginForm from '../containers/PopulatedLoginForm'
import ContentPane from './ContentPane'

const isGuest = (nextState, replace, callback) => {
    
    if (localStorage.getItem('access_token')) {
        replace('/validate')
    } 
    callback()
}

const isLoggedIn = (state, nextState, callback) => {

    if (!localStorage.getItem('access_token')) {
        replace('/login')
    }
    callback()
}

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="login" component={PopulatedLoginForm} onEnter={isGuest} />
                <Route path="validate" component={ContentPane} onEnter={isLoggedIn} />
            </Route>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
