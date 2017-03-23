import { connect } from 'react-redux'
import SearchResultsView from '../components/SearchResultsView'

const mapStateToProps = (state) => {
    // Convert objects to array
    let records = Object.values(state.validationReducer.search)
    return {
        records
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }
}

const PopulatedSearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResultsView)

export default PopulatedSearchResults
