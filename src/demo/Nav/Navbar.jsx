import React from 'react'
import "../Nav/Nav2.css"
import { NavLink } from 'react-router-dom'




const Navbar = () => {
  return (
    <>

<nav>
  <ul>
    {/* <li><NavLink to="/Home">Home</NavLink></li> */}
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/About">About</NavLink></li>
    <li><NavLink to="/Explore">Explore</NavLink></li>
    <li><NavLink to="/registration">Registration</NavLink></li>
    <li><NavLink to="/wallet">Wallet</NavLink></li>
    <li><NavLink to="/Contact">Contact</NavLink></li>
    <li><NavLink to="/bond">Bonds</NavLink></li>
  </ul>
</nav>

    </>
  )
}

export default Navbar;