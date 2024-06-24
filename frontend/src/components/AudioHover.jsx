import React from "react";
import Control from "./Control";
export default function AudioHover({current,setCurrent,nextSong,setPlay}){
       const now = current.now;
      return(
         <div className="h-12 w-screen p-2 flex z-10 bg-black ">
            <div className="bg-black h-12"><img src={now.cover} className="object contain h-full w-16 md:w-16 bg-black" /></div>
           <div className="text-orange-500 bg-black ml-0 mr-0">
            <h1 className="bg-black pl-3 ml-0  h-12">
            {now.song}
            </h1>
            <h4  className="bg-black ml-0  h-12">
            {now.artist}
            </h4>
           
           </div> 
           <div className="w-full bg-black ml-0"><Control current={current} setCurrent={setCurrent}  nextSong={nextSong} setPlay={setPlay}/></div>
         </div> )
  
}