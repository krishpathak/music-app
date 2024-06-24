import React from "react";

import 'reactjs-popup/dist/index.css';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
export default function MusicCover({song,artist,cover,audio,index,current,setCurrent,setAdd}){
       
      const newaudio = new Audio(audio)
      const obj ={
        artist:artist,
        song:song,
        cover:cover,
        audio:audio,
      }
      function setsong(){
       
       setCurrent({now:obj,play:false,index:index})
      }
      
       return(
        <>
        
         <div className="w-full h-12 border-indigo-50 bg-black text-orange-500  grid grid-cols-7 z-5" >
            <div className="col-span-1 rounded-full" onClick={setsong}> <img src={cover} className="object contain h-3/5 w-full md:w-3/5 pl-10" /></div>
            <div className="font-bold col-span-3">{song}</div>
            <div className="col-span-1">{artist}</div>
            <div className="col-span-1"> <PlaylistAddIcon onClick={()=>{
                document.getElementById("dialog").show()
                setAdd(obj)
            }}/></div>
            
         </div>
         
         </>
       )
}