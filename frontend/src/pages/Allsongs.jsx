import React, { useState, useEffect } from "react"
import AudioHover from "../components/AudioHover";
import MusicCover from "../components/MusicCover";
import Search from "../components/Search"
import { songsData } from '../assets/assets'
import Songitem from "../components/Songitem";
export default function Allsongs({ current, setCurrent }) {
    const [songs, setSongs] = useState([])
    const [add, setAdd] = useState({})
    useEffect(() => {
        const url = 'http://localhost:8000/song';
        fetch(url, { method: "GET", credentials: "include" }).then((response) => {
            response.json().then((data) => {
                setSongs(data)
            })
        }).catch((e) => {
            console.log(e)
        })


    }, [])
    function nextSong(index) {
        if (index < songs.length && index >= 0) {
            setCurrent({

                now: songs[index],
                play: true,
                index: index,
                length: songs.length
            })

        } else {
            setCurrent(null)
        }
    }

  return(
      <>
    
      <div className='your-playlist h-96'>
      <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 '>Songs</h1>
       <Search songs={add}/>
      {
         songs.length>0 &&  songs.map((s,i)=>{
            return <MusicCover key={i} song={s.song} artist={s.artist} audio={s.audio} cover={s.cover} index={i} current={current} setCurrent={setCurrent} setAdd={setAdd}/>
           })
      }
     
     <div className="text-left w-screen bg-black z-10">
     { current ? <AudioHover current={current} setCurrent={setCurrent}  nextSong={nextSong} /> : null }
      </div>
     </div>
      </>
  )
}