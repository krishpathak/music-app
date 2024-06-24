import { useState } from 'react'
import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { FaCompactDisc } from "react-icons/fa6";
const Login = ({setusername}) => {
    const [credentials, setcredentials] = useState({ username: "", password: "" })
    const navigate =useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/auth/login';
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: credentials.username, password: credentials.password })
        });

        const json = await response.json();
        const{message}=json;
        if(message!==undefined){
        alert(message)}
        if(message ==="success"){
        setusername(credentials.username)
         navigate('/home')}
       
    }
    const handleonchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials);
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
                <h1 className="welcome1">Welcome</h1>
                <p className="credentials">Username</p>
                <input type="text" className="credentials-fill" placeholder='Enter your username' name='username' onChange={handleonchange} />
                <p className="credentials">Password</p>
                <input type="password" className="credentials-fill" placeholder='Enter your password' name='password' onChange={handleonchange} />
                <button className='register' type='submit' onClick={handlesubmit}> Login</button>
                <a href="/forget" className='forget' >Forget password?</a>
                <p className="credentials">Don't have account <a href="/register" className='login' >Register</a></p>
            </div>


        </div>
    )
}

export default Login