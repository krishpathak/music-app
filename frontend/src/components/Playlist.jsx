import React,{useEffect,useState,useReducer} from "react";
import { useParams } from "react-router-dom";
import image from './vasudha.jpg'
import MusicCover from "./MusicCover";
import Control from "./Control";
import AudioHover from "./AudioHover";
import Playplaylist from "./Playplaylist";

export default function Playlist(){
        
        //   const shuffle = (array: string[]) => { 
        //     return array.sort(() => Math.random() - 0.5); 
        // }; 
       
        const {name}= useParams();
        console.log(name)
        useEffect(()=>{
            const url = `http://localhost:8000/playlist/${name}`;
             fetch(url,{method:"GET",credentials:"include"}).then((response)=>{
               response.json().then((data)=>{
                    setSongs(data[0].songs)
               })
            }).catch((e)=>{
                console.log(e)
            })
           
    
        },[])
        const [songs,setSongs] =useState([])
        const [current,setCurrent] =useState(null)
        const [play,setPlay] = useState(false)
         console.log(typeof(songs))
   function nextSong(index){
       if(index <songs.length && index >=0){
            setCurrent({
                
                now: songs[index],
                play:play,
                index:index,
                length:songs.length
            })
       
       }else{
        setCurrent(null)
       }
   }
      return(
        <>
     <div className="h-screen w-screen bg-black">
        
      <div className="grid grid-cols-4 h-1/6 w-full">
          <div className="col-span-1 bold content-center"
          >
            <img src={image} className="object contain h-3/5 w-full md:w-3/5 pl-10" />
          </div>
          <div className="col-span-3 h-1/6 pt-8 pl-4 text-left text-orange-500  border-x-fuchsia-600">
           <h1 className="font-bold text-lg">Playlist</h1>
           <h3 className="text-md">Created By: </h3>
           <h6 className="text-sm">Total songs: Time: </h6>
          </div>
      </div>
      <Playplaylist setCurrent={setCurrent} songs={songs}/>
      {songs.map((s,i)=>{
       
                return <MusicCover key={i} song={s.song} artist={s.artist} audio={s.audio} cover={s.cover} index={i} current={current}  setCurrent={setCurrent}/>
      })}
          <div className="text-left w-screen bg-black z-10">
      {  current ? <AudioHover current={current} setCurrent={setCurrent}  nextSong={nextSong} setPlay={setPlay}/> : null }
      </div>
      </div>
     
      </>
   )
}