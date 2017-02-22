// Middleware to redirect 
// This middleware is called after authentication

import { browserHistory } from 'react-router' 

export const CALL_API = 'Call Api'

export default store => next => action => {

    switch (action.type) {
        // Continue if the request is not about calling APIs
        case 'REDIRECT_TO_HOME':
            // Put the acess token in localStorage
            localStorage.setItem('access_token', action['response'].access_token)
            localStorage.setItem('role', action['response'].role)

            // Redirect
            browserHistory.push('/validate')
            return next(action)

        case 'LOGOUT':
            // Remove the access token and role in localStorage
            localStorage.removeItem('access_token')
            localStorage.removeItem('role')

            // Redirect to login page
            browserHistory.push('/login')
            return next(action)

        default:
            return next(action)
    }

}
