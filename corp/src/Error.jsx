import React from 'react'
import { Navigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
const ErrorStyle ={
    display: "borderBox",
    color: "#c38585",
    fontSize : "x-large",
    backgroundColor: "#b8b6d4",
    padding: "30px",
    marginTop: "20px",
    fontFamily: "Arial",
    textAlign : "center",
    height: "67vh",
    lineHeight :2
}


 const Error = () => {
    return (
        <React.Fragment>
            <div style={ErrorStyle}>

           
            <h1>404 Error Page</h1>
            <p>Sorry, This page is not valid</p>
            <Link to= "/">Back</Link>
            </div>
        </React.Fragment>
    )
}
export default Error;

