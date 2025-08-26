import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import SignUp from './components/SingUp'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/contact" element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
