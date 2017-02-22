// Middleware to redirect 

import { browserHistory } from 'react-router' 

export const CALL_API = 'Call Api'

export default store => next => action => {

    // Continue if the request is not about calling APIs
    if (action['type'] !== 'REDIRECT_TO_HOME') {
        return next(action)
    } else {
        // Put the acess token in localStorage
        localStorage.setItem('access_token', action['response'].access_token)
        console.log(action['response'].access_token)
        console.log('setting localStorage')
        console.log(localStorage.getItem('access_token'))

        //TODO: Redirect
        browserHistory.push('/validate')

        return next(action)
    }

}
