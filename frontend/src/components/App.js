import React from 'react'
import AuthorizedNavbar from '../containers/AuthorizedNavbar'
import ContentPane from './ContentPane'

const App = ({ children }) => (
    <div>
        <AuthorizedNavbar />
        { children } 
    </div>
)

export default App
