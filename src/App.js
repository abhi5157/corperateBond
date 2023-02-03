import React from 'react'
// import { Switch ,Route } from 'react-router-dom'
import { Route,Routes } from 'react-router'

import Home from './Home/Home'
import Contact from './Contact/Contact';
import About from './about/About';

import Navbar from './Nav/Navbar'
import Header from './Header'

import Error from './Error'
import Menu from './Component/Menu';
import Footer from './Footer/Footer'
import Registration from './Reg/Registration';

import Wallet from './Wallet';
// import { Wallet } from 'ethers';






const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>

      <Route exact path = "/"  element = {<Home />} />
      <Route exact  path = "/About" element = {<About />} />
      <Route exact  path = "/Contact" element = {<Contact />} />
      <Route exact  path = "/registration" element = {<Registration/>} />
      <Route exact  path = "/Explore" element = {<Menu/>} />
      {/* <Route exact  path = "/Wallet" element = {<Error /> } /> */}
      <Route exact  path = "/bond" element = {<Error /> } />
      <Route exact  path = "/wallet" element = {<Wallet /> } />
      <Route path = "*" element = {<Home/>} />
 
     
     </Routes>
     <Footer />
     {/* <Wallet /> */}
    </>
  )
}

export default App;