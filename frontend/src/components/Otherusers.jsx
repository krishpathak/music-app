import React, { useEffect, useState } from 'react'

const Otherusers = ({username}) => {
    console.log(username)
    const [user, setusers] = useState([]);
    const [data, setdata] = useState([])
    useEffect(() => {
        const url = 'http://localhost:8000/';

        async function alluser() {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setusers(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        alluser();
    }, []);

    useEffect(() => {
        console.log(user)
        setdata(user)
    }, [user])

    async function updateFollow(id){
        const url = 'http://localhost:8000/playlist/allfollow';

        const response=await fetch(url,{
            method:'POST',
            credentials:'include',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({id:id,username:username})
        })
        const result= await response.json()
        console.log(result)
    }
    return (
        <div className='flex flex-row'>
            {Array.isArray(data) && data.map((u) => {
                return (
                    <div key={u.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 mt-5 mx-3 justify-center">
                        <img className="w-full" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-l mb-2 text-center text-white">{u.username}</div>
                        </div>
                        <button className='bg-orange-300 h-8 w-20 rounded-md ml-3 mb-3' onClick={() => updateFollow(u._id)}>Follow</button>
                    </div>
                );
            })}

        </div>
    )
}

export default Otherusers