import React from 'react'
import "./Registration.css"

const Registration = () => {
    return (
        <>
        <div className="reg">
   <div className="wrapper" id = ".grad_blue">
<div className="inner">
<form action="" className='Reg-form'>
<h1>Create Bonds</h1>
<div className="form-group">
<div className="form-wrapper">
<label for="">Organization Name</label>
<input type="text" className="form-control" />
</div>
<div className="form-wrapper">
<label for="">Token Name</label>
<input type="text" className="form-control" />
</div>
<div className="form-wrapper">
<label for="">Email</label>
<input type="text" className="form-control" />
</div>
<div className="form-wrapper">
<label for="">Address</label>
<input type="password" className="form-control" />
</div>
<div className="place">
    <label htmlFor="Place">Type of Bond</label>
    <input type="text" className="form-control" />
</div>
<div className="place">
    <label htmlFor="Detail"> Coupon Rate </label>
    <input type="text" className="form-control" />
</div>
<div className="place">
    <label htmlFor="Detail"> Maturity Period </label>
    <input type="text" className="form-control" />
</div>

<div className="place">
    <label htmlFor="Detail"> Security </label>
    <input type="text" className="form-control" />
</div>
</div>

<div className="checkbox">
<label>
<input type="checkbox" /> I accept the Terms of Use & Privacy Policy.
<span className="checkmark"></span>
</label>
</div>
<button className='register-btn'>Register Now</button>
</form>
</div>
</div>  
</div>
        </>
    )
}

export default Registration
