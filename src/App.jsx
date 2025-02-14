import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './Components/Header'
// import FeaturesSection from './Components/FeaturesSection'


const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    {/* <FeaturesSection />  */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App