import React from "react";

export default function ArtistCard(){
    return(
      
        <div className="all-card flex" >
        <div className='artist-card w-56 mx-4 h-64'>
                <img src="https://th.bing.com/th/id/OIP.59NKFT_AFBExk1XtFPWViAHaHi?rs=1&pid=ImgDetMain" className="artist-photo mt-6" alt="" height={'80%'} width={'80%'} style={{ borderRadius: '100px', marginLeft: '10%' }} />
                <div className='artist-name mt-3 text-center font-semibold text-orange-300 opacity-60 font-mono' width={'85%'}>Arijit Singh</div>
                <div className="artist-description ml-3 mt-1 opacity-0">Indian singer-songwriter blending folk and indie genres,poignant lyrics, resonating heartfelt emotions.</div>
            </div>
            </div>
       
    )
}