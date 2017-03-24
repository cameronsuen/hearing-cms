import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import PopulatedLoginForm from '../containers/PopulatedLoginForm'
import ContentPane from './ContentPane'
import ExportContentPane from './ExportContentPane'
import ImportContentPane from './ImportContentPane'

const isGuest = (nextState, replace, callback) => {
    
    if (localStorage.getItem('access_token')) {
        replace('/cms/validate')
    } 
    callback()
}

const isLoggedIn = (state, nextState, callback) => {

    if (!localStorage.getItem('access_token')) {
        replace('/cms/login')
    }
    callback()
}

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/cms" component={App}>
                <Route path="login" component={PopulatedLoginForm} onEnter={isGuest} />
                <Route path="validate" component={ContentPane} onEnter={isLoggedIn} />
                <Route path="export" component={ExportContentPane} onEnter={isLoggedIn} />
                <Route path="import" component={ImportContentPane} onEnter={isLoggedIn} />
            </Route>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
