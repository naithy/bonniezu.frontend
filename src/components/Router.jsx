import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import ServicePage from './screens/ServicePage/ServicePage'
import OtherPage from './screens/OtherPage/OtherPage'


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<ServicePage/>} path='/discord'/>
            <Route element={<ServicePage/>} path='/faceit'/>
            <Route element={<ServicePage/>} path='/spotify'/>
            <Route element={<ServicePage/>} path='/steam'/>
            <Route element={<ServicePage/>} path='/games/:id'/>
            <Route element={<OtherPage/>} path='/other'/>
            <Route element={<ServicePage/>} path='/chatgpt'/>
            <Route element={<ServicePage/>} path='/brawl'/>
            <Route element={<ServicePage/>} path='/xbox'/>
            <Route element={<ServicePage/>} path='/fc'/>
            <Route element={<ServicePage/>} path='/battlenet'/>
            <Route element={<ServicePage/>} path='/fortnite'/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router