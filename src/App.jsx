import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Router,Route } from 'react-router-dom'
import Body from './Body'
import HeroSection from '../components/HeroSection'
import Language from "../src/Recognition/Language"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Body/>} />
      <Route path="Language" element={<Language/>}/>
    </Routes>
    
  )
}

export default App
