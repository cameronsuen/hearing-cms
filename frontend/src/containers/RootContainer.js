import { connect } from 'react-redux'
import App from '../components/App'
import Root from '../components/Root'

const mapDispatchToProps = (dispatch) => {
    return {
        isGuest: (nextState, replace, callback) {
            
        }
    }
}

const RouteContainer = connect(null, mapDispatchToProps)(Root)

export default RouteContainer
