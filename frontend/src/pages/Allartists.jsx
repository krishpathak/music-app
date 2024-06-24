import react from "react"
import ArtistCard from "../components/Artistcard";

export default function Allartist(){

    return(
        <>
        
        <div className='your-playlist h-96'>
        <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 '>Artists</h1>
        <ArtistCard/>
        </div>
       
        </>
    )
}