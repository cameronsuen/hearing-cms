// Adapted from the real-world example from reactjs/redux repo

// This is the middleware that fetches content/ calls API and returns the response


// You can change the API route to localhost if you want to use your local repo
// const API_ROOT = 'http://localhost:80'
const API_ROOT = 'http://cep.ust.hk'

const callApi = (endpoint, method, body, auth_needed) => {

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    if (auth_needed) {
        const access_token = localStorage.getItem('access_token')
        if (access_token !== null) { 
            headers.append('Authorization', 'Bearer ' + access_token);
        } else {
            // TODO: Return to login page
        }
    }

    const init = { 
        method: method,
        headers: headers,
        mode: 'cors',
    }

    if (method !== 'GET' && body !== null) {
        init.body = JSON.stringify(body)
    }

    // Check if endpoints contains the API_ROOT, if not, prepend it 
    const url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

    return fetch(url, init)
        .then(response => {
            if (response.headers.get('Content-Type') === 'application/json') {
                return response.json()
            } else {
                return response.blob()
            }
        }).then(obj => {
            if (obj instanceof Blob){
                return obj
            } else {
                console.log(obj)
                return Object.assign({}, obj)
            }
        })
        .catch(err => {
            console.log(err)
            return err
        })

}

export const CALL_API = 'Call Api'

export default store => next => action => {


    // Continue if the request is not about calling APIs
    if (typeof action[CALL_API] === 'undefined') {
        return next(action)
    }

    const apiParams = action[CALL_API]
    console.log(action)

    let { endpoint, method, body, auth_needed } = apiParams
    const { types } = apiParams

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

    /*const [ successType, failureType ] = types*/

    /*return callApi(endpoint, method, body, auth_needed).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            error,
            type: failureType
        }))
    )*/

    return callApi(endpoint, method, body, auth_needed)
}
