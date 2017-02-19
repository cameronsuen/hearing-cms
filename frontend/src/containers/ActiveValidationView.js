import { connect } from 'react-redux'
import { validateSample } from '../actions'
import ValidationView from '../components/ValidationView'

const mapStateToProps = (state) => {
    console.log(state)
    let sample = state.samples[state.active]
    return {
        sample
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onValidate: (comment) => {
            dispatch(validateSample(comment))
        }
    }
}

const ActiveValidationView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationView)

export default ActiveValidationView
