import React from 'react'
import './HP.css'
import bgvideo from '../../assets/videos/bgvideo.mp4'

const BackGroundVideo = () => (
    <div className='backgroundvideo'>
        <video src={bgvideo} autoPlay loop muted />
    </div>
)

export default BackGroundVideo