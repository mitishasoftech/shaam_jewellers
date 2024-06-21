import React from 'react'
import Home from "./homefolder/Home"
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './productfolder/Products'
import Scrollup from './components/Scrollup'

const App = () => {
  return (
    <>
      <div className='topbar'></div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
      <Scrollup />
    </>
  )
}

export default App

