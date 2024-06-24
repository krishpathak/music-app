import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
const Ownprofile = ({ username }) => {
   const[follower,setfollower]=useState();
   const[following,setfollowings]=useState(); 
    useEffect(() => {
        const url = 'http://localhost:8000/playlist/followers';

        async function alluser() {
                const response = await fetch(url, {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username: username })
                });
                const data = await response.json();
                setfollower(data.length)
            }
            alluser()
        },[])
        useEffect(() => {
            const url = 'http://localhost:8000/playlist/followings';
    
            async function alluser() {
                    const response = await fetch(url, {
                        method: "POST",
                        credentials: 'include',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ username: username })
                    });
                    const data = await response.json();
                    setfollowings(data.length)
                    
                }
                alluser();
            },[])
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container font-bold text-orange-300 flex flex-col justify-center items-center w-1/2 h-96 font-mono border border-4 border-orange-300 rounded-lg">
                <div className='text-xl text-center mt-0 '>Your Profile</div>
                <img className=" h-16 w-16 mt-3 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <h1 className=' mt-5 text-4xl'>{username}</h1>
                <div className='flex gap-2 justify-center mt-4'>
                    <p>7 Playlists </p>
                    <Link to='/followers'>
                        <div className="follower bg-orange-300 text-black rounded-md w-24 h-6 text-center">
                            <button>{follower}Followers</button>
                        </div>
                    </Link>
                    <Link to='/followings'>
                    <div className="follower  bg-orange-300 text-black rounded-md w-24 h-6 text-center">
                        <button>{following}Followings</button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Ownprofile