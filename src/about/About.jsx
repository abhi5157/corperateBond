import React from 'react'
import "./about.css"
import "./MemberStyle.css"
import abh from "./abh.jpg"
import pr1 from "./p1.png"
import pr2 from "./p2.png"



  {/* //team members function */}

const Team = (props)  =>{
  
  return(
    <>
     <div className="team">
    <div className="team-img">
      <img src={props.img} alt="Team-Image" className='img-style' />
      <div className="team-social">
        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
        <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
      </div>
    </div>
    <div className="team-content">
      <h2>{props.name}</h2>
     
      <h3>
        {props.area}
      </h3>
      <p> {props.disc} </p>
      </div>
      </div>
    </>
  )
}



// About us page 

const About = () => {
  return (
    <>

 <div className="about-section"  style = {{background :  "none"}}>
        <div className="inner-container">
            <h1 className='title'>Virtual Velocity</h1>
            <p className="text" id='text1'>
                An Decentralized Application through which anyone can Corporate  trade in bonds at Domestic as well as International 
            </p>
            <div className="member">                
                  <span >
                  <Team name = "Abhishek Joshi" 
                  area = "Block Chain Developer"
                  img = {pr1}
                   />
                </span>

                <span>
                  <Team
                  name = "Divyang Jha" 
                  area = "React Developer"
                  img = {pr1} />
                </span>

                <span>
                  <Team
                  name = "Prem Kumar" 
                  area = "Content Designer"
                  img = {pr1} />  
                </span>
               
            </div>
          </div>
          </div>

    </>
  )
}

export default About;


