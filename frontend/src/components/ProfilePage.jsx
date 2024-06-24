import React from 'react'
import Navbar from './Navbar'
import ArtistCard from './Artistcard'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container font-bold text-orange-300 flex flex-col justify-center items-center w-1/2 h-96 font-mono border border-4 border-orange-300 rounded-lg">
                <div className='text-xl text-center mt-0 '>Your Profile</div>
                <img className=" h-16 w-16 mt-3 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <h1 className=' mt-5 text-4xl'>Username</h1>
                <div className='flex gap-2 justify-center mt-4'>
                    <p>7 Playlists </p>
                    <Link to=''>
                    <div className="follower bg-orange-300 text-black rounded-md w-24 h-6 text-center">
                        <a href="/follower" >Followers</a>
                    </div>
                    </Link>
                    <div className="follower  bg-orange-300 text-black rounded-md w-24 h-6 text-center">
                        <a href="/followings">Following</a>
                    </div>
                </div>
                
                
                {/* <div className='text-2xl text-center mt-7 mr-10  '>Your Top Artists</div>
                <div className="artist-list flex gap-2 items-center">
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                </div> */}
            </div>


        </div>


    )
}

export default ProfilePage