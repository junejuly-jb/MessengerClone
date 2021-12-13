import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import ProtectedRoutes from './ProtectedRoutes'
import UnprotectedRoutes from './UnprotectedRoutes'
import NotFound from '../components/NotFound/NotFound'

const Views = () => {

     return (
          <Routes>
               <Route element={<UnprotectedRoutes />}>
                    <Route path="/" element={<Login />} />
               </Route>
               <Route element={<ProtectedRoutes />}>
                    <Route path='/home' element={<Home />} />
               </Route>
               <Route path="*" element={<NotFound/>} />
          </Routes>
     )
}

export default Views
