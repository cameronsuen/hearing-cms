import { connect } from 'react-redux'
import { validateSample } from '../actions'
import ValidationView from '../components/ValidationView'

const mapStateToProps = (state) => {
    const { samples, fetching, active } = state.validationReducer
    let { imgUrl, audioUrl } = state.validationReducer

    let sample = {
        id: -1,
        sample: '',
        word: 'Loading',
        img: ''
    }

    if (!fetching && active !== -1) {
        sample = samples[active]
    } else {
        imgUrl = '/img/loading.svg'
        audioUrl = '/img/loading.svg'
    }

    return {
        sample,
        imgUrl: imgUrl,
        audioUrl: audioUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onValidate: (comment) => {
            dispatch(validateSample(comment))
        },
        dispatch: dispatch
    }
}

const ActiveValidationView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationView)

export default ActiveValidationView
