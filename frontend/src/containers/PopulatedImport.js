import { connect } from 'react-redux'
import { importFunc } from '../actions'
import { exportSamples } from '../actions'
import ImportView from '../components/ImportView'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (file) => {
            dispatch(importFunc(file))
        }
    }
}

const PopulatedImport = connect(null, mapDispatchToProps)(ImportView)

export default PopulatedImport
