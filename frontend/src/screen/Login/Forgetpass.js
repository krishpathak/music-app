import React, { useState } from 'react'
import './Login.css'
import { FaCompactDisc } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Forgetpass = ({setforgetotp}) => {
  const [credentials, setcredentials] = useState({ email: " " })
  const navigate = useNavigate()

  const handleOnClick = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8000/auth/getotp';
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email })
    });
    const json = await response.json();
    const { okay, otp } = json;
    if (okay === 123) {
      navigate('/otp')
      setforgetotp({otp:otp, email:credentials.email})
    }
    else {
      const { message } = json;
      alert(message);
    }
  };
  const handleonchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='body1'>
      <div className="left-side1">
        <div className="lhs1">
          <div className="name">Musicify</div>
          <div className="description">Discover new music, listen offline, and experience high-quality audio, all tailored to your unique taste. Start your musical journey today!</div></div>
        <div className="rhs1">
          <FaCompactDisc className='disc' /></div>
      </div>
      <div className="right-side1">
        <h1 className="welcome1">Forget Password</h1>
        <p className="credentials">Email</p>
        <input type="text" className="credentials-fill" placeholder='Enter your email' name='email' onChange={handleonchange} />
        <button className='register' type='submit' onClick={handleOnClick}> Get OTP</button>
      </div>
    </div>
  )
}

export default Forgetpass