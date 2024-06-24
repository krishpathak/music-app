import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Followings = ({ username }) => {
  console.log({ username })
  const [user, setusers] = useState([]);
  const [data, setdata] = useState([])

  const handleondelete=(id)=>{
   console.log(id)
    const url = 'http://localhost:8000/playlist/deletefollower';
    async function deleteFollower(){
      
      const response= await fetch(url,{
        method:'DELETE',
        credentials:'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id:id })
      })
      const result = await response.json();
      console.log(result);
    }
   deleteFollower();
  }
  useEffect(() => {
    const url = 'http://localhost:8000/playlist/followings';

    async function alluser() {
      try {
        const response = await fetch(url, {
          method: "POST",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username })
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
  return (
    <div>
      <h1 className='text-orange-300 mt-0 font-mono' style={{fontSize:'40px'}}>Followings</h1>
      <div className='flex flex-row'>
        
            {Array.isArray(data) && data.map((u) => {
                return (
                    <div key={u.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 mt-5 mx-3 justify-center">
                      
                        <img className="w-full" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-l mb-2 text-center text-white text-orange-200">{u.followingusername}</div>
                            <DeleteIcon className='text-orange-300' style={{fontSize:'2rem', marginTop:'-20%'}} onClick={()=>handleondelete(u._id)}/>
                        </div>
                    </div>
                );
            })}

        </div>
    </div>
  )
}

export default Followings