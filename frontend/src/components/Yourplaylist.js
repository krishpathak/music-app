import React from 'react'

const Yourplaylist = () => {
    return (
        <div className='your-playlist h-96'>
            <h1 className='heading font-mono font-extrabold text-orange-300 text-center text-3xl my-5 underline'>Your Top Playlist</h1>
            <div className="all-card flex" >
                <div className='song-card w-56 mx-4 ' style={{height:'80%'}}>
                    <img src="https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>My playlist</div>
                </div>
                <div className='song-card w-56 mx-4 h-64' style={{height:'80%'}}>
                    <img src="https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>My playlist</div>
                </div>
                <div className='song-card w-56 mx-4 h-64' style={{height:'80%'}}>
                    <img src="https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>My playlist</div>
                </div>
                <div className='song-card w-56 mx-4 h-64' style={{height:'80%'}}>
                    <img src="https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>My playlist</div>
                </div>
                <div className='song-card w-56 mx-4 h-64' style={{height:'80%'}}>
                    <img src="https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>My playlist</div>
                </div>
                <div className='song-card w-56 mx-4 h-64' style={{height:'80%'}}>
                    <img src="https://th.bing.com/th/id/OIP.ijJu1PyvDY0MM2vCdpDCrwHaHa?rs=1&pid=ImgDetMain" className="artist-photo mt-6 " alt="" height={'80%'} width={'80%'} style={{ marginLeft: '10%', height:'80%'}} />
                    <div className='artist-name my-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>My playlist</div>
                </div>
            </div>
        </div>
    )
}

export default Yourplaylist