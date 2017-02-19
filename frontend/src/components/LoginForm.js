import React from 'react'

const LoginForm = () => (
    <div className="col-md-6 col-md-offset-3">
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Login</h3>
            </div>
            <div className="panel-body">
                <div className="form-group">  
                    <label htmlFor="inputUsername" className="col-md-2">Username</label>
                    <div className="col-md-10">
                        <input className="form-control" id="inputUsername" placeholder="Username" type="text" />
                    </div>
                </div>
                <div className="form-group">  
                    <label htmlFor="inputPassword" className="col-md-2">Password</label>
                    <div className="col-md-10">
                        <input className="form-control" id="inputPassword" placeholder="Password" type="password" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LoginForm
