import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
//below thing keep the header footer same and changes only the midle section
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
           <Header />
           <Outlet/>
           <Footer />
        </>
    )
}

export default Layout
