import React from 'react'
import Card from "./Cards";
import "./Explore.css";



const Explore  = ({item}) => {
  return (
    <>

<div className="container">
  
   {item.map((value)=>{
    //  const{sname,imgscr,title,links,category} = value;      array destructurning
  return (
     <Card     sname = {value.sname}
     imgscr ={value.imgscr}
     category = {value.category}
     couponRate = {value.couponRate}
     Maturity = {value.Maturity}
     type = {value.type}
     minAmt = {value.minAmt}
     ratings = {value.ratings}

     />          /*   it is used for mapping outside of of array*/
  )
}
)
}
</div>
    </>
  )
}

export default Explore;


