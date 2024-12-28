import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import Serv from './pages/Serv'
import Appre from './assets/homelinks/Appre'
import Hire from './assets/homelinks/Hire'
import Exp from './assets/homelinks/Exp'
import Skills from './assets/Aboutlinks/Skills'
import Career from './assets/Aboutlinks/Career'
import Seminar from './profilelinks/Seminar'
import Certificate from './profilelinks/Certificate'
import Apps from './pages/Contact/Apps'
import Applic from './pages/Contact/Applic'

function App() {
  const [count, setCount] = useState(0)

  return (
   

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='profile' element={<Profile />} />
      <Route path='contact' element={<Contact />} />
      <Route path='orders' element={<Orders />} />
      <Route path='services' element={<Serv />} />
      <Route path='appre' element={<Appre />} />
      <Route path='hire' element={<Hire />} />
      <Route path='exp' element={<Exp />} />
      <Route path='skills' element={<Skills />} />
      <Route path='career' element={<Career />} />
      <Route path='seminar' element={<Seminar />} />
      <Route path='certifcate' element={<Certificate />} />
      <Route path='apps' element={<Apps />} />
      <Route path='applic' element={<Applic />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
