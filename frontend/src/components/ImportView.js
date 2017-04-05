import React from 'react'
import { Field, reduxForm } from 'redux-form'

const textRight = {
    textAlign: 'right'
}

const renderFile = () => (
    <input type="file" className="form-control-file" id="inputFile"></input>
)

class ImportViewComponent extends React.Component {

    constructor(props) { super(props) }

    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Please upload the .zip file here</h3>
                </div>
                <div className="panel panel-body">
                    <form onSubmit={ this.props.handleSubmit(values => this.props.onSubmit({values})) } className="form-horizontal">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    Format of files in the zip: username_date_dd.wav
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <Field name="inputFile" component={renderFile} className="form-control" />
                                    <small id="fileHelp" className="form-text text-muted">Max. size: 2048MB</small>
                                </div>

                                <div className="col-md-4" style={textRight}>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const ImportView = reduxForm({
    form: 'import'
})(ImportViewComponent)

export default ImportView
