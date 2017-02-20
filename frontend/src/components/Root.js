import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import PopulatedLoginForm from '../containers/PopulatedLoginForm'
import ContentPane from './ContentPane'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="login" component={PopulatedLoginForm} />
                <Route path="validate" component={ContentPane} />
            </Route>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
