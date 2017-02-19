import fetch from 'isomorphic-fetch'

export const requestSamples = () => {
    return {
        type: 'REQUEST_SAMPLES'
    }
}

export const receiveSamples = (samples) => {
    return {
        type: 'RECEIVE_SAMPLES',
        samples
    }
}

// Just a dummy callback to execute when validation completes
export const completeValidation = (id, json) => {
    return {
        type: 'COMPLETE_VALIDATION',
        id: id
    }
}

export const validateSample = (comment) => {
    return (dispatch, getState) => {
        const { active, samples } = getState() 
        const id = samples[active].id
        const payload = {
            op: 'add',
            field: comment,
            value: 1
        }
        const body = JSON.stringify(payload)
        if (active >= 4) {
            return dispatch(putValidation(id, body))
                .then(() => {
                    dispatch({
                        type: 'VALIDATE_SAMPLE',
                        comment: comment
                    })
                    dispatch(fetchSamples())
                })
        } else {
            return dispatch(putValidation(id, body))
                .then(() => {
                    dispatch({
                        type: 'VALIDATE_SAMPLE',
                        comment: comment
                    })
                })
            
        }
    }
}

export const fetchSamples = () => {
    return (dispatch) => {
        dispatch(requestSamples())
            
        // Fetching the samples, transforming the response to json
        // dispatching the RECEIVE_SAMPLES action
        return fetch('http://localhost/samples', {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(json => dispatch(receiveSamples(json)))
    }
}

export const putValidation = (id, body) => {

    // Set the Content-Type to be application/json
    // Required for the backend to work
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer ');

    return (dispatch) => {

        // Send a PUT request to submit the validation done to the samples
        return fetch('http://localhost/samples/'+id, {method: 'PUT', mode: 'cors', headers: headers, body: body})
            .then(response => response.json())
            .then(json => dispatch(completeValidation(id)))
    }
}
