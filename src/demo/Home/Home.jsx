import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"


const Home = () => {

  
  return (
    <>
    <section className="sec1" >
    <div className="hero-image">
  <div className="hero-text">
    <h1> A Decentralized Application For trading in Stocks<br/> begins with single<br />
       Step</h1>
    
    <button> <NavLink to="/Explore">Explore</NavLink></button>
  </div>
</div>
</section>
<section className="sec2">
  <h2> What are Bonds </h2>
  <p> A bond is an debt or loan which is taken by company from Public or we can say that Bonds are debt securities(proof) issued by corporation, govt or any other organization and sold it to investor for the purpose of getting a loan from investor.</p>
</section>
<section className="sec3"></section>


    </>
  )
}

export default Home;