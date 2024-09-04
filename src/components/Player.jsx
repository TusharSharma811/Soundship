import React from 'react'
import { useContext } from 'react'
import {songsData} from "../assets/frontend-assets/assets"
import { assets } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../context/PlayerContext'
const Player = () => {
  const {seekbg , seekbar , playstate , play , pause , track , time} = useContext(PlayerContext) ;
  const handlePlay = ()=>{
     return playstate ? pause() : play()
  }
  return (
    <div className=' h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className=' hidden lg:flex items-center gap-4 '>
          <img className='w-12' src={track.image} alt="" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
          <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
            <img onClick={handlePlay} className='w-4 cursor-pointer' src={playstate?assets.pause_icon:assets.play_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
          </div>
          <div className=' flex items-center gap-5'>
            <p>{time.currenttime.minutes}:{time.currenttime.seconds}</p>
            <div ref={seekbg} className='w-[60vw] max-w-[500px] h-1 bg-white cursor-pointer rounded-full'>
              <hr ref={seekbar} className='h-1 w-0 bg-green-400 rounded-full border-none'/>
            </div>
            <p>{time.totaltime.minutes}:{time.totaltime.seconds}</p>
          </div>
        </div>
        
    </div>
  )
}

export default Player