import { connect } from 'react-redux'
import CounterView from '../components/CounterView'

const mapStateToProps = (state) => {
    let counter = state.counter
    return {
        counter
    }
}

const CurrentCounterView = connect(mapStateToProps)(CounterView)

export default CurrentCounterView
