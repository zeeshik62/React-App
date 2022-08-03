import React from 'react'
import { useState } from 'react'
const Login = () => {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [emailError,setEmailError]=useState('');
const [passwordError,setPasswordError]=useState('');

const handleEmailChange = (e)=>{
  setEmail(e.target.value)
}
const handlePasswordChange = (e)=>{
  setPassword(e.target.value)
}
 

const handleSubmit = (event)=>{
event.preventDefault();
if(!email )
{
  setEmailError('insert email')
  return;
}
else
setEmailError('')
if(!password )
{
  setPasswordError('insert pass')
  return;
}
else
setPasswordError('')
console.log(email,password)
 }



  return (
    <form onSubmit={handleSubmit}>
    <div className="row mb-3">
      <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="email" onChange={handleEmailChange} className="form-control" id="email"/>
     
      <p style={{color:'red'}}>{emailError}</p>
      
      </div>
    </div>
    <div className="row mb-3">
      <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10">
        <input type="password" onChange={handlePasswordChange} className="form-control" id="password"/>
       
        <p style={{color:'red'}}>{passwordError}</p>

      </div>
    </div>
  
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
  )
}

export default Login