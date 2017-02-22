import { connect } from 'react-redux'
import { login } from '../actions'
import CounterView from '../components/CounterView'

const mapStateToProps = (state) => {
    let counter = state.validationReducer.counter
    return {
        counter
    }
}

const CurrentCounterView = connect(mapStateToProps)(CounterView)

export default CurrentCounterView
