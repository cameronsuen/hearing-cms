import { connect } from 'react-redux'
import { search } from '../actions'
import SearchView from '../components/SearchView'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (parameters) => {
            dispatch(search(parameters))
        }
    }
}

const PopulatedSearch = connect(null, mapDispatchToProps)(SearchView)

export default PopulatedSearch
