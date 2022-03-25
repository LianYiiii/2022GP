import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IuseIndex from '../iuseindex/IuseIndex'
import Login from '../login/Login'
import NotFound from '../notFound/NotFound'
import Register from '../register/Register'
import Forecast from '../Components/Forecast'
import Trashbin from '../Components/Trashbin'
import Person from '../person/Person'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<IuseIndex />} >
          <Route path='trashbin' element={<Trashbin />} />
          <Route path='tree' element={<Forecast />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='person' element={<Person />} />
      </Routes>
    </HashRouter>
  )
}
