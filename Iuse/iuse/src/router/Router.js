import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IuseIndex from '../iuseindex/IuseIndex'
import Login from '../login/Login'
import Register from '../register/Register'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<IuseIndex />} />
        <Route path='*' element={<IuseIndex />} />
      </Routes>
    </HashRouter>
  )
}
