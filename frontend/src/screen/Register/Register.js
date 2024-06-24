import React, { useState } from 'react'
import './register.css'
import { FaCompactDisc } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Register = ({ setOtpState }) => {

    const [isChecked, setIsChecked] = useState(false);
    const [credentials, setcredentials] = useState({ username: "", password: "", email: "", cpassword: "" })
    const navigate = useNavigate();
    const handleOnchange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleOnClick = async (e) => {
        if (credentials.username === "" || credentials.password === "" || credentials.email === "" || credentials.cpassword === "") { alert('Please fill credentials') } 
        else {
            if (!isChecked) {
                alert('Please agree terms and condition');
            }

            else {
                if(credentials.password.length>=6){
                if (credentials.password === credentials.cpassword) {
                    const url = 'http://localhost:8000/auth/cheak';
                    const response = await fetch(url, {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ username: credentials.username, password: credentials.password, email: credentials.email })
                    });
                    const json = await response.json();
                    const { okay, otp } = json;
                    console.log(okay === 123);
                    if (okay === 123) {
                        setOtpState({ credentials: credentials, otp: otp });
                        navigate('/otp1')
                    }
                    else {
                        const { message } = json;
                        alert(message);
                    }
                }
                else {
                    alert("Confirm password and password doesnt matches")
                }
            }
            else{
                alert('Password must be equal or more than 6 digit')
            }
        }
        };
    }

    const handleOnChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials);
    }
    return (
        <div className='body'>
            <div className="left-side">
                <div className="lhs">
                    <div className="name1">Musicify</div>
                    <div className="description1">Discover new music, listen offline, and experience high-quality audio, all tailored to your unique taste. Start your musical journey today!</div></div>
                <div className="rhs">
                    <FaCompactDisc className='disc1' /></div>
            </div>
            <div className="right-side">
                <h1 className="welcome" style={{ fontSize: '40px' }}>Welcome</h1>
                <p className="credentials1">Email</p>
                <input type="text" className="credentials-fill1" placeholder='Enter your email' name="email" onChange={handleOnChange} />
                <p className="credentials1">Password</p>
                <input type="password" className="credentials-fill1" placeholder='Enter your password' name="password" onChange={handleOnChange} />
                <p className="credentials1">Confirm Password</p>
                <input type="password" className="credentials-fill1" placeholder='Re-enter the password' name="cpassword" onChange={handleOnChange} />
                <p className="credentials1">Username</p>
                <input type="text" className="credentials-fill1" placeholder='Enter the username' name="username" onChange={handleOnChange} />
                <div className="tandc1">
                    <input type="checkbox" onChange={handleOnchange} />I agree <a href="/" className="term1" >terms and condition</a> </div>
                <button className='register1' type='submit' onClick={handleOnClick}> Register</button>

                <p className="credentials1">Already have account? <a href="/login" className='login1' >Login</a></p>
            </div>


        </div>
    )
}

export default Register