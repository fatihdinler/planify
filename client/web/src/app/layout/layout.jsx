import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../../routes'
import { NotFound } from '../../app'

const Layout = () => {
  return (
    <Routes>
      {
        routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))
      }
      <Route path='*' element={ <NotFound /> }/>
    </Routes>
  )
}

export default Layout