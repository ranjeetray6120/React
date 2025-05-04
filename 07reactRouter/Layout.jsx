import React from 'react'
import Footer from './src/component/Footer/Footer'
import Header from './src/component/Header/Header'
import { Outlet } from 'react-router-dom'

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
