import { connect } from 'react-redux'
import { login } from '../actions'
import LoginForm from '../components/LoginForm'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (credentials) => {
            dispatch(login(credentials))
        }
    }
}

const PopulatedLoginForm = connect(null, mapDispatchToProps)(LoginForm)

export default PopulatedLoginForm
