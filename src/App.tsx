import React from 'react'
import logo from './logo.svg'
import './App.css'

import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'
import Skills from './components/skills/skills'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/' element={<About />} /> {/* Default to About */}
      </Routes>
    </Router>
  )
}

export default App
