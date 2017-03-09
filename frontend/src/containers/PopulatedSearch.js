import { connect } from 'react-redux'
import { login } from '../actions'
import SearchView from '../components/SearchView'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (credentials) => {
            dispatch(login(credentials))
        }
    }
}

const PopulatedSearch = connect(null, mapDispatchToProps)(SearchView)

export default PopulatedSearch
