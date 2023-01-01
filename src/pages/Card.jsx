import React from 'react'

const Card = ({meal}) => {
  return (
    <div className='w-72 border-2 flex justify-center items-center flex-col gap-5 p-5 rounded-lg'>
        <img src={meal.strMealThumb} width="200px" className='rounded-lg' alt="" />
        <h3>{meal.strMeal}</h3>
        <button className='text-whie bg-blue-500 px-10 py-2 rounded-md'>Detail</button>
    </div>
  )
}

export default Card