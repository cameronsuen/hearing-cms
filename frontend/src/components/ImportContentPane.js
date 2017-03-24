import React from 'react'
import PopulatedSearchResults from '../containers/PopulatedSearchResults'
import PopulatedImport from '../containers/PopulatedImport'

const marginTop = {
    marginTop: '35px'
}

const ImportContentPane = () => {
    var condition = true;
    var alert;

    if (condition)
        alert = (
            <div className="alert alert-success fade in alert-dismissable">
                <a href="#" className="close" data-dismiss="alert" aria-label="close" title="close">×</a>
                <strong>Success!</strong> You have uploaded the file. 
            </div>
        )

    return (
        <div className="container-fluid">
            {alert}
            <div className="row" style={marginTop}>
                <div className="col-md-6 col-md-offset-3">
                    <PopulatedImport />
                </div>
            </div>
        </div>

    )
}

export default ImportContentPane
