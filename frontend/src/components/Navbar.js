import React from 'react'

const Navbar = ({routes, activeRoute, isLoggedIn, logout}) => {

    // Make the list of menu items, mark the current route as active
    const items = routes.map(route => { 
        if (route.name === activeRoute) { 
            return <li className="active"><a href={route.href}>{route.name}</a></li>
        } else {
            return <li><a href={route.href}>{route.name}</a></li>
        }
    })

    const linkStyle = {
        cursor: 'pointer'
    }

    let logoutBtn = ''

    if (isLoggedIn) {
        logoutBtn = <li><a style={linkStyle} onClick={logout}>Logout</a></li>
    }
    
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#hearing-cms-navbar">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Hearing CMS</a>
                </div>
        
                <div className="collapse navbar-collapse" id="hearing-cms-navbar">
                    <ul className="nav navbar-nav">
                         { items }
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        { logoutBtn }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
