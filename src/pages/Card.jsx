import React from 'react'
import {AiFillEye} from "react-icons/ai"
import {Link} from "react-router-dom"
const Card = ({meal}) => {
  return (
    <div className='w-60 border-2 flex justify-center items-center flex-col gap-5 p-5 rounded-lg relative h-[400px] shadow hover:scale-105 transition duration-200 hover:shadow-lg '>
        <img src={meal.strMealThumb} width="200px" className='rounded-lg' alt="" />
        <h3>{meal.strMeal}</h3>
        <Link to={`/detail/${meal.idMeal}`}>
          <button className='text-white bg-blue-500 
          px-8 py-2  rounded-md  bottom-3 flex'>Details<AiFillEye className='text-2xl pl-1' /></button>
        </Link>
    </div>
  )
}

export default Card