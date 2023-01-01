import React from 'react'
import {RiRestaurant2Fill} from "react-icons/ri"
const Navbar = () => {
  return (
    <div>
        <div className='flex items-center gap-2 my-8'>
        <RiRestaurant2Fill className='text-3xl text-rose-600' />
        <p className='text-xl font-semibold'>Foodie</p>
      </div>
    </div>
  )
}

export default Navbar