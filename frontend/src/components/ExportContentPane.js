import React from 'react'
import ActiveValidationView from '../containers/ActiveValidationView'
import SearchView from './SearchView'
// import ManualView from './ManualView'

const ContentPane = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="row">
                    <div className="col-md-12">
                        <SearchView />
                    </div>
                </div>
                // <div className="row">
                //     <div className="col-md-12">
                //         <ManualView />
                //     </div>
                // </div>
            </div>
        </div>
    </div>
)

export default ExportContentPane
