import React, { useState } from 'react'
import { FaCompactDisc } from "react-icons/fa6";
import Otp1 from '../Register/Otp1';
import { useNavigate } from 'react-router-dom';
const Otp = ({forgetotp}) => {
  const navigate=useNavigate();
  const[otps,setOtp]=useState();
  const onhandleclick = async (e) => {
    e.preventDefault();
    if (otps == forgetotp.otp) {
        navigate('/change')
    }
}
const handleChange = (e) => {
  setOtp(e.target.value);
};
  return (
    <div>
        <div  className='body1'>
            <div className="left-side1">
                <div className="lhs1">
                <div className="name">Musicify</div>
                <div className="description">Discover new music, listen offline, and experience high-quality audio, all tailored to your unique taste. Start your musical journey today!</div></div>
                <div className="rhs1">
                <FaCompactDisc className='disc' /></div>
            </div>
            <div className="right-side1">
            <h1 className="welcome1">Enter OTP</h1>
            <p className="credentials">Enter OTP</p>
            <input type="text" className='credentials-fill1'  placeholder='Enter OTP' onChange={handleChange}/>
            <button className='register' type='submit' onClick={onhandleclick}>Change password</button>
            </div>
    </div>
    </div>
  )
}

export default Otp