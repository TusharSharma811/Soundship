import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/frontend-assets/assets'
import Albumitems from './Albumitems'
import { songsData } from '../assets/frontend-assets/assets'
import Songitem from './Songitem'
const DisplayHome = () => {
  return (
    <>
    <Navbar />
    <div className='mb-4'>
        <h1 className=' my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto '>
        {
            albumsData.map((item , index)=> <Albumitems key={index} id={item.id} image={item.image} name={item.name} desc={item.desc}/>)
        }
        </div>
       
    </div>
    <div className='mb-4'>
        <h1 className=' my-5 font-bold text-2xl'>Biggest Hits</h1>
        <div className='flex overflow-auto '>
        {
            songsData.map((item , index)=> <Songitem key={index} id={item.id} image={item.image} name={item.name} desc={item.desc} />)
        }
        </div>
       
    </div>
    </>
  )
}

export default DisplayHome