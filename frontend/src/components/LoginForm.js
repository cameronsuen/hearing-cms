import React from 'react'
import { Field, reduxForm } from 'redux-form'

const buttonStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const buttonRowStyle = {
    marginTop: '1em'
}

const LoginFormComponent = ({ handleSubmit }) => (
    <div className="col-md-6 col-md-offset-3">
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Login</h3>
            </div>
            <div className="panel-body">
                <form onSubmit={handleSubmit} className="form-horizontal">
                    <div className="form-group">  
                        <label htmlFor="username" className="col-md-2">Username</label>
                        <div className="col-md-10">
                            <Field name="username" component="input" className="form-control" placeholder="Username" type="text" />
                        </div>
                    </div>
                    <div className="form-group">  
                        <label htmlFor="password" className="col-md-2">Password</label>
                        <div className="col-md-10">
                            <Field name="password" component="input" className="form-control" placeholder="Password" type="password" />
                        </div>
                    </div>
                    <div className="form-group">  
                        <div className="col-md-12" style={buttonRowStyle}>
                            <button type="submit" className="btn btn-warning" style={buttonStyle}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

const LoginForm = reduxForm({
    form: 'login'
})(LoginFormComponent)

export default LoginForm
