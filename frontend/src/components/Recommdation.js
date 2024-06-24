import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
const Recommdation = ({width}) => {
    const calculatedMarginLeft = width === '85%' ? '67%' : '70%';
    return (
        <div className='your-playlist h-96'>
            <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 underline'>Your Top Playlist</h1>
            <div className="all-card flex" >
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/1200x1200bf-60.jpg" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <FaCirclePlay  className='logo -mt-11 h-10 w-10 text-orange-400 opacity-0' style={{marginLeft:calculatedMarginLeft}}/>
                    <div className='artist-name mt-4 mx-5 font-bold text-orange-400 opacity-80 font-mono' width={'85%'}>Husn</div>
                    <div className='artist-name-insong mx-5 text-orange-400 opacity-50'>Anuv Jain</div>
                </div>
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/1200x1200bf-60.jpg" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <FaCirclePlay  className='logo -mt-11 h-10 w-10 text-orange-400 opacity-0' style={{marginLeft:calculatedMarginLeft}}/>
                    <div className='artist-name mt-4 mx-5 font-bold text-orange-400 opacity-80 font-mono' width={'85%'}>Husn</div>
                    <div className='artist-name-insong mx-5 text-orange-400 opacity-50'>Anuv Jain</div>
                </div>
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/1200x1200bf-60.jpg" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <FaCirclePlay  className='logo -mt-11 h-10 w-10 text-orange-400 opacity-0' style={{marginLeft:calculatedMarginLeft}}/>
                    <div className='artist-name mt-4 mx-5 font-bold text-orange-400 opacity-80 font-mono' width={'85%'}>Husn</div>
                    <div className='artist-name-insong mx-5 text-orange-400 opacity-50'>Anuv Jain</div>
                </div>
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/1200x1200bf-60.jpg" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <FaCirclePlay  className='logo -mt-11 h-10 w-10 text-orange-400 opacity-0' style={{marginLeft:calculatedMarginLeft}}/>
                    <div className='artist-name mt-4 mx-5 font-bold text-orange-400 opacity-80 font-mono' width={'85%'}>Husn</div>
                    <div className='artist-name-insong mx-5 text-orange-400 opacity-50'>Anuv Jain</div>
                </div>
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/1200x1200bf-60.jpg" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <FaCirclePlay  className='logo -mt-11 h-10 w-10 text-orange-400 opacity-0' style={{marginLeft:calculatedMarginLeft}}/>
                    <div className='artist-name mt-4 mx-5 font-bold text-orange-400 opacity-80 font-mono' width={'85%'}>Husn</div>
                    <div className='artist-name-insong mx-5 text-orange-400 opacity-50'>Anuv Jain</div>
                </div>
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/1200x1200bf-60.jpg" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <FaCirclePlay  className='logo -mt-11 h-10 w-10 text-orange-400 opacity-0' style={{marginLeft:calculatedMarginLeft}}/>
                    <div className='artist-name mt-4 mx-5 font-bold text-orange-400 opacity-80 font-mono' width={'85%'}>Husn</div>
                    <div className='artist-name-insong mx-5 text-orange-400 opacity-50'>Anuv Jain</div>
                </div>
            </div>
        </div>
    )
}

export default Recommdation