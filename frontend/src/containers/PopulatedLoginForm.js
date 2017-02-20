import { connect } from 'react-redux'
import { login } from '../actions'
import LoginForm from '../components/LoginForm'

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (credentials) => {
            dispatch(login(credientials))
        }
    }
}

const PopulatedLoginForm = connect(mapDispatchToProps)(LoginForm)

export default PopulatedLoginForm
