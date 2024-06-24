import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
export default function Playplaylist({setCurrent,songs}){
    function playSongs(){
       
        setCurrent(
          {now:songs[0],
          length:songs.length,
          play:true,
          index:0
          }
        )
       }
      //  function shuffleSongs(){
           
      //   setCurrent(
      //     {now:songs[0],
      //     next:songs[1] ,
      //     prev:null,
      //     play:true,
      //     index:0
      //     }
      //   )
      //  }
     return(
        <div className="text-left pl-5 h-2/6">
        <PlayCircleIcon style={{color: " rgb(249 ,115, 22)",fontSize: "5em"}} onClick={
          playSongs}/>
        <RepeatIcon style={{color: "rgb(249 ,115, 22)",fontSize: "5em"}} />
      </div>
     )
}