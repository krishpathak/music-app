import React, { useState } from 'react'
import { FaCompactDisc } from "react-icons/fa6";
const Otp1 = ({otpState}) => {
  const [otps, setOtp] = useState('');
    const { credentials, otp } = otpState;
    
    const onhandleclick = async (e) => {
        e.preventDefault();
        if (otps != otp) {
            alert("OTP entered is incorrect");
        } else {
            const url = 'http://localhost:8000/auth/signup';
            const response = await fetch(url, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: credentials.username, password: credentials.password, email: credentials.email })
            });
            const json = await response.json();
            console.log(json);
        }
    };
    const handleChange = (e) => {
        setOtp(e.target.value);
    };

  return (
    <div  className='body1'>
            <div className="left-side">
                <div className="lhs">
                <div className="name">Musicify</div>
                <div className="description1">Discover new music, listen offline, and experience high-quality audio, all tailored to your unique taste. Start your musical journey today!</div></div>
                <div className="rhs">
                <FaCompactDisc className='disc' /></div>
            </div>
            <div className="right-side">
            <h1 className="welcome1" style={{marginTop:'200px'}}>Enter your OTP</h1>
            <p className="credentials">Enter OTP</p>
            <input type="text" className="credentials-fill1"  placeholder='Enter the OTP' onChange={handleChange}/>
            <button className='register1' type='submit' onClick={onhandleclick}> Register</button>
            </div>

            
        </div>
  )
}

export default Otp1