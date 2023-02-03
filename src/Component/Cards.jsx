import React from 'react';
import './Explore.css'

function  Card(props){
  
    return(
  // <div className="cards">
  //     <div className="card">
  //       <img src={props.imgscr} alt="Travel place" className = "card_img" />
  //       <div className="card_info">{props.sname}</div>
  //       <span className="card_title">{props.title}</span>
  //       <h3 className="card_category">{props.category}</h3>
  //       <a href= {props.links} className="" target="_blank">
  //         <button onClick={props.links}> Want more</button>
  //       </a>
  //     </div>
    // </div>

    <div className="cards">
      <div className="card">
       <div className="sec1">
        <div className="image">
          <img src={props.imgscr} alt= {props.sname}  />
        </div>
        <div className="title"><b> Name </b> : {props.sname} </div>
       </div>

       <div className="sec2">
        <div className="content"> <b> Coupons </b> : {props.couponRate} </div>
        <div className="content"><b> Maturity </b> : {props.Maturity} </div>
        <div className="content"><b> Type of Bonds </b> : {props.type} </div>
        <div className="content"><b> YTM </b> : {props.Maturity} </div>
        <div className="content"> <b>Minimum Amount </b> : {props.minAmt} </div>
        <div className="content"> <b>Rating  </b>: {props.ratings}</div>
       </div>


      </div>
    </div>


    );
  }
 export default Card;

