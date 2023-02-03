import React, {useState} from "react";
import "./Contact.css";



const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value, 
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}.
      number is ${data.phone},
      email is ${data.email} and
        here is what i want to say  ${data.msg}`
    );

  };
  return (
    <>
    <div className="">
      <h1 className="title"> Contact Us</h1>
    </div>
    <div className="">
      <div className="row">
     
          <form onSubmit={formSubmit}  className= "form_surf">
          
    <label for="exampleFormControlInput1" className="form-label" >Full Name </label>
    <input 
    type="text" 
    className="form-control temp" 
   
    id="exampleFormControlInput1" 
    name="fullname" 
    value={data.fullname}  
    onChange={InputEvent} 
    placeholder="Enter your Name"
    required
     />
 
  
    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
    <input 
    type="number" 
    className="form-control" 
    id="exampleFormControlInput1"  
    name="phone" 
    value={data.phone} 
    onChange={InputEvent} 
    placeholder="Enter your Number"
    required />
       
  
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input 
    type="email" 
    className="form-control" 
    id="exampleFormControlInput1" 
    name="email" 
    value={data.email} 
    onChange={InputEvent} 
    placeholder="xyz@example.com" 
    required/>
  
 
    <label for="exampleFormControlTextarea1" className="form-label" >Message </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
    name="msg" 
    value={data.msg} 
    onChange={InputEvent} 
    placeholder="Your Message"
    required ></textarea>
 
  <div className="btn-sec">
    <button className="btn"  > Submit Form </button>
  </div>
  </form>
        </div> 
      </div>

    </>
  );
};

export default Contact;