import React from 'react'
import {assets} from "../assets/frontend-assets/assets"
const Sidebar = () => {
  return (
    <div className=' w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className=' bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
            <div className=' flex items-center gap-3 pl-8 cursor-pointer '>
                <img className="w-6" src={assets.home_icon} alt="" />
                <p className=' font-bold'>Home</p>
            </div>
            <div className=' flex items-center gap-3 pl-8 cursor-pointer '>
                <img className="w-6" src={assets.search_icon} alt="" />
                <p className=' font-bold'>Search</p>
            </div>

        </div>
        <div className=' bg-[#121212] h-[85%] rounded'>
            <div className=' p-4 flex items-center justify-between'>
                <div className=' flex items-center gap-3'>
                    <img className=' w-8' src={assets.stack_icon} alt="" />
                    <p className=' font-semibold'>Your library</p>
                </div>
                <div className=' flex items-center gap-2 text-sm'>
                    <img className='w-5' src={assets.arrow_right} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />

                </div>
            </div>
            <div className=' flex bg-[#242424] p-4 font-semibold justify-start m-2 rounded flex-col items-start pl-4 gap-1'>
                <h1 className=''>
                    Create Your First Playlist
                </h1>
                <p className=' font-light'>It's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] rounded-full text-black mt-2'>Create Playlist</button>
            </div>


        </div>
    </div>
  )
}

export default Sidebar