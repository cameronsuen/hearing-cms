import { connect } from 'react-redux'
import { search } from '../actions'
import { exportSamples } from '../actions'
import SearchView from '../components/SearchView'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (parameters) => {
            dispatch(search(parameters))
        },

        onExport: (parameters) => {
            dispatch(exportSamples(parameters))
        }
    }
}

const PopulatedSearch = connect(null, mapDispatchToProps)(SearchView)

export default PopulatedSearch
