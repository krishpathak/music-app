import React,{useState,useRef} from "react";
import  {useNavigate} from "react-router-dom"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
export default function Search({songs}){
    const [credentials, setcredentials] = useState({name: "" })
    
    const [playlists,setPlaylists] =useState([]);
    const navigate = useNavigate();
   
    function showDialog(){
        const dialog = document.getElementById("dialog")
        console.log(songs)
        dialog.show()
     }
     function closeDialog(){
        const dialog = document.getElementById("dialog")
        dialog.close()
     }
     const handlesubmit = async (e) => {
        e.preventDefault();
      
        const url = 'http://localhost:8000/playlist/search';
        const response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name})
        }).then(async(response)=>{
             const json = await response.json();
             if(json.message === "success") setPlaylists(json.result)
        });

        
    }
    const handleonchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials);
    }
   async function add(e){
        const name =e.target.value;
        console.log(songs)
         const url = 'http://localhost:8000/playlist/add';
         const response = await fetch(url, {
             method: "PUT",
             credentials: "include",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({ name:name,songs:songs})
         }).then(async(response)=>{
              const json = await response.json();
              alert(json.message)
              setcredentials("")
         });
         closeDialog()
    }
   
       return(
          
      
         <div className="all-card flex" >
               
<dialog id="dialog" className="">
<form class="max-w-sm mx-auto" method="POST" onSubmit={handlesubmit}>
  <div class="mb-5">
   
    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" name="name" onChange={handleonchange} required />
  </div>
  
  {
    playlists.length>0 &&playlists.map((playlist,i)=>{
             return(
                   <>
                   <input className="bg-white text-orange-300 hover:text-red-700"  value={playlist.name} key={i} onClick={add} readOnly/>
                   </>
                  
                
             )
    })
  }
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e)=>{
    e.target.setAttribute("display","hidden")
  }}>Search</button>
</form>

</dialog>

                </div>
               
        
        
      
       )
}