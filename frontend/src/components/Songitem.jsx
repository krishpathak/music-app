import React,{useContext} from 'react'
//import { PlayerContext } from '../context/PlayerContext'
const Songitem = ({name,desc,image,id}) => {

  //const {playWithId} = useContext(PlayerContext)
  return (
    <div>
       <div className="min-w-[180px] p-2 px-3 rounded cursor pointer hover:bg-[#ffffff26]">
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1 text-white'>{name}</p>
        <p className='text-white text-sm '>{desc}</p>
       </div>
    </div>
  )
}

export default Songitem