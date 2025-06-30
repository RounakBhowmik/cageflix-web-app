import React from 'react'
import Navbar from '../navbar/Navbars'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout