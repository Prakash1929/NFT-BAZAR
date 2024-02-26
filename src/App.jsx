import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'
import './Media.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default App