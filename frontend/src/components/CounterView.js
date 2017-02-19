import React, { PropTypes } from 'react'

const pStyle = {
    textAlign: 'center'
}

const counterStyle = {
    textAlign: 'center',
    color: '#2196f3'
}

const CounterView = ({ counter }) => (
    <div className="panel panel-success">
        <div className="panel-heading">
            <h3 className="panel-title">Counter</h3>
        </div>
        <div className="panel-body">
            <p className="lead" style={pStyle}>
                You have validated
            </p>
            <h3 style={counterStyle}>{counter}</h3>
            <p className="lead" style={pStyle}>
                Record(s) so far.
            </p>
        </div>
    </div>
)

export default CounterView
