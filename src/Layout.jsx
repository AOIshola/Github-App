import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout