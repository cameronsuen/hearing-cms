import React from 'react'
import ActiveValidationView from '../containers/ActiveValidationView'
import CurrentCounterView from '../containers/CurrentCounterView'
import ManualView from './ManualView'

const ContentPane = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 col-md-offset-1">
                <div className="row">
                    <div className="col-md-12">
                        <CurrentCounterView />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ManualView />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <ActiveValidationView />
            </div>
        </div>
    </div>
)

export default ContentPane
