import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import SignUp from './components/SingUp'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
          <Route path="/login" element={<ForgotPassword/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
