import { connect } from 'react-redux'
import { getAuthorizedRoutes } from '../actions'
import Navbar from '../components/Navbar'

const mapStateToProps = (state) => {
    // authLevel is a number, larger number means greater authority and more accessible routes
    switch(state.authLevel) {
        default:
            return { routes: [
                { href:'/', name:'Home' },
                { href:'/validate', name:'Validate' },
                { href:'/import', name:'Import' },
                { href:'/export', name:'Export' },
                { href:'/statistics', name:'Statistics' },
                { href:'/admin', name:'Admin' }
            ], activeRoute: 'Validate'}
    }
}

const AuthorizedNavbar = connect(mapStateToProps)(Navbar)

export default AuthorizedNavbar
