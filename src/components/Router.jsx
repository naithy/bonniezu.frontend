import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import ServicePage from './screens/ServicePage/ServicePage'


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<ServicePage/>} path='/discord'/>
            <Route element={<ServicePage/>} path='/faceit'/>
            <Route element={<ServicePage/>} path='/spotify'/>
            <Route element={<ServicePage/>} path='/steam'/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router