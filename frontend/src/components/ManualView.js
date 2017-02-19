import React from 'react'

const ManualView = () => (
    <div className="panel panel-info">
        <div className="panel-heading">
            <h3 className="panel-title">Manual</h3>
        </div>
        <div className="panel panel-body">
            <ul>
                <li>Listen to the voice played</li>
                <li>Compare the voice played to the word displayed on the word list</li>
                <li>Determine whether the sample is correct, incorrect, unsure, or is a noise</li>
            </ul>
        </div>
    </div>
)

export default ManualView
