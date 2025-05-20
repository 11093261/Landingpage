import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Body = () => {
  return (
    <main>
      <Outlet/>
      <Header/>
      <HeroSection/>
      <Features/>
      <Footer/>
    </main>
    
  )
}

export default Body
