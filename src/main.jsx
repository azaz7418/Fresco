import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './layout/Layout.jsx'

import Contact from './pages/contact/Contact.jsx'
import Menu from './pages/menu/Menu.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
 <Route path='/' element={<Layout/>}>
  <Route path='/' element={<Home/>} />
  <Route path='/menu' element={<Menu/>} />
  <Route path='/aboutUs' element={<AboutUs/>} />
  <Route path='/contact' element={<Contact/>} />
 </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
