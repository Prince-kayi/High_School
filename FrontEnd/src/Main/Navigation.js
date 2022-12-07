import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Netball from '../Navbar/ApplyList'
import Process from '../Navbar/Process'
import About from '../Pages/About'
import Football from '../Pages/Apply'
import Apply from '../Pages/Apply'
import Arts from '../Pages/Arts'
import Contact from '../Pages/Contact'
import Faq from '../Pages/Faq'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import AdmissionRequirement from './Admissions'
import FetPhase from './FetPhase'
import SeniorPhase from './SeniorPhase'
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/cost' element={<Arts />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/phase' element={<SeniorPhase />} />
        <Route path='/fet' element={<FetPhase/>} />
        <Route path='/netbal' element={<Netball/>} />
        <Route path='/footba' element={<Football/>} />
        <Route path='/academic' element={<AdmissionRequirement/>} />
        <Route path='/process' element={<Process/>} />   
      </Routes>
    </div>
  )
}

export default Routers
