import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components'
import { Checkout, Home, ItemDetails, Confirmation, Navbar } from './app'

const Layout = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='item/:itemId' element={<ItemDetails />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkout/success' element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout