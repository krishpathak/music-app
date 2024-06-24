import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreVert from "@mui/icons-material/MoreVert";
import { uploadCover } from "./cloudinary";
export default function PlaylistCard({name,cover}){
    const [file,setFile] = useState(null);
    const Navigate = useNavigate();
    function goToplaylist(){
               Navigate(`/player/${name}`)
    }
    async function handleDelete(){
        const url = `http://localhost:8000/playlist/delete/${name}`;
        const response = await fetch(url, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
           
        }).then(async(response)=>{
             const json = await response.json();
             if(json.message === "success") alert(json.message)
        });
    const dialog =document.getElementById("extra")
         dialog.close()
        window.location.reload()
    }
    async function handlesubmit(e){
        e.preventDefault()
        const cover = await uploadCover(file)

        const url = `http://localhost:8000/playlist/cover`;
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:name,cover:cover})
        }).then(async(response)=>{
             const json = await response.json();
             if(json.message === "success") alert(json.message)
        });
    const dialog =document.getElementById("cover")
         dialog.close()
        
    }
    function handleonchange(e){
        setFile(e.target.files[0]);
    }
    return(
      
             <>
             
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src={cover ? cover : "https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain"} className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} onClick={goToplaylist}/>
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>{name}</div>
                    <div><MoreVertIcon style={{color:"white"}} onClick={()=>{

                      const dialog = document.getElementById("extra");
                      dialog.show()
                    }}/>
                    </div>
                    <dialog id="extra" className="">
                    <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1">Share</div>
                    <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1" onClick={handleDelete}>Delete</div>
                    <div className="text-black- hover:text-white bg-white hover:bg-orange-500 p-1" onClick={()=>{
                          document.getElementById("cover")?.show()
                          document.getElementById("extra")?.close()
                    }}>Change Cover</div>
                    <div onClick={()=>{
                         const dialog = document.getElementById("extra");
                         dialog.close()
                    }}>Close</div>
                </dialog>
                <dialog id="cover" className="ml-10">
                <form class="max-w-sm mx-auto"  onSubmit={handlesubmit}>
                      <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add cover</label>
                        <input type="file" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  name="cover" onChange={handleonchange}required />
                      </div>
                      {file ? <img
                    src={URL.createObjectURL(file)}
                    alt="Uploaded"
                    className="w-full h-auto"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  /> : null}
  
                         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add</button>
                       </form>
                   </dialog>
                </div>
               
             </>   
              
    )
}