import { connect } from 'react-redux'
// import { getAuthorizedRoutes } from '../actions'
import SearchResultsView from '../components/SearchResultsView'

const mapStateToProps = (state) => {
    return {
        records:[
            {
                vowel: 'P',
                consonant: 'a'
            }

        ]}
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
