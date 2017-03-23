import { connect } from 'react-redux'
// import { getAuthorizedRoutes } from '../actions'
import Navbar from '../components/Navbar'

const mapStateToProps = (state) => {
    console.log(state.validationReducer.role)
    // authLevel is a number, larger number means greater authority and more accessible routes
    switch(state.validationReducer.role) {
        case 400:
            return { routes: [
                { href:'/', name:'Home' },
                { href:'/validate', name:'Validate' },
                { href:'/import', name:'Import' },
                { href:'/export', name:'Export' },
                { href:'/statistics', name:'Statistics' },
                { href:'/admin', name:'Admin' }
            ], activeRoute: 'Validate', isLoggedIn: true }
        case 300:
            return { routes: [
                { href:'/', name:'Home' },
                { href:'/validate', name:'Validate' },
                { href:'/import', name:'Import' },
                { href:'/export', name:'Export' },
                { href:'/statistics', name:'Statistics' },
            ], activeRoute: 'Validate', isLoggedIn: true }
        case 200:
            return { routes: [
                { href:'/', name:'Home' },
                { href:'/validate', name:'Validate' },
                { href:'/import', name:'Import' },
            ], activeRoute: 'Validate', isLoggedIn: true }
        case 100:
            return { routes: [
                { href:'/', name:'Home' },
                { href:'/validate', name:'Validate' },
            ], activeRoute: 'Validate', isLoggedIn: true }
        default:
            return { routes: [
            ], activeRoute: 'Login', isLoggedIn: false }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch({
                type: 'LOGOUT'
            })
        }
    }
}

const AuthorizedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default AuthorizedNavbar
