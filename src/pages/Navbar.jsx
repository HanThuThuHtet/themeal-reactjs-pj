import React from 'react'
import {RiRestaurant2Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Link to="/">
      <div>
        <div className='flex items-center gap-2 my-8'>
        <RiRestaurant2Fill className='text-3xl text-rose-600' />
        <p className='text-xl font-semibold'>Foodie</p>
      </div>
    </div>
    </Link>
  )
}

export default Navbar