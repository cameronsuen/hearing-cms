// Adapted from the real-world example from reactjs/redux repo

const API_ROOT = 'http://localhost:80'

const callApi = (endpoint, method, body, auth_needed) => {

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    if (auth_needed) {
        access_token = localStorage.getItem('access_token')
        if (access_token !== null) { 
            headers.append('Authorization', 'Bearer ' + acess_token);
        } else {
            // TODO: Return to login page
        }
    }

    // Check if endpoints contains the API_ROOT, if not, prepend it 
    const url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

    return fetch(endpoint, { method: method, headers: headers, body: JSON.stringify(body), mode: 'cors' })
        .then(response => response.json()
            .then(json => {
                if (!response.ok) {
                    return Promise.reject(json)
                }

                return Object.assign({}, json)
            })
        )

}

export const CALL_API = 'Call Api'

export default store => next => action => {

    // Continue if the request is not about calling APIs
    if (typeof action[CALL_API] === 'undefined') {
        console.log(action)
        return next(action)
    }

    let { endpoint, method, body, auth_needed } = callApi 
    const { types } = callApi

    if (typeof endpoint !== 'string') {
        throw new Error('Please specify an endpoint')
    }

    // method defaults to GET
    if (method == null)  {
        method = 'GET'
    } 

    // authentication defaults to true
    if (auth_needed == null) {
        auth_needed = true
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    const [ successType, failureType ] = types

    return callApi(end_point, method, body, auth_needed).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            response,
            type: failureType
        }))
    )
}
