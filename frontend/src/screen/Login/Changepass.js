import React, { useState } from 'react'
import { FaCompactDisc } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Changepass = ({forgetotp}) => {
    const navigate=useNavigate()
    const[password,setpassword]=useState({password:"", cpassword:''});
    const onhandleClick=async ()=>{
        if(password.password.length>=6){
        if(password.password===password.cpassword){
        const url='http://localhost:8000/auth/changepass';
        const response = await fetch(url, {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: forgetotp.email, password:password.password})
          });
          const json =await response.json();
          console.log(json)
          const {message}=json;
          if(message===undefined){
          navigate('/login')}
          else{
            alert(message)
          }
        }
        else{
            alert("Password doesn't matches with confirm password")
        }
    }
    else{
        alert('Please enter the password more than 6 letter')
    }
    }
    const onhadlechange=(e)=>{
        setpassword({...password,[e.target.name]:e.target.value})
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
                <h1 className="welcome1">Change your password</h1>
                <p className="credentials">Password</p>
                <input type="password" className="credentials-fill" placeholder='Enter new password' name='password'onChange={onhadlechange}/>
                <p className="credentials">Confirm Password</p>
                <input type="password" className="credentials-fill" placeholder='Confirm your password'name='cpassword' onChange={onhadlechange}/>
                <button className='register' type='submit' onClick={onhandleClick}> Enter</button>
            </div>
        </div>
    )
}

export default Changepass