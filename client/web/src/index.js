import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './app'
import { BrowserRouter } from 'react-router-dom'
import './shared/style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
)