import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillYoutube } from "react-icons/ai"
import Loading from './Loader/Loading';

const Detail = () => {
  const {id} = useParams();
  const [meal , setMeal ] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getSingleMeal = async() => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals);
    setMeal(data?.meals[0]);
    setIsLoading(false);
  }
  useEffect(() => {
    getSingleMeal();
  },[])
  return (
    <>
      {isLoading ? <Loading /> :
      (
        <div className='flex flex-col gap-5' >
          <img src={meal.strMealThumb} alt="" width={"300px"} className="rounded-xl shadow" />
          <div className='text-white bg-pink-500 w-20 text-center text-sm rounded'>{meal.strCategory}</div>
          <h1 className='text-2xl'>{meal.strMeal}</h1>
          <div>
            <h2 className='text-2xl mb-2'>Instruction</h2>
            <p className='tracking-wide leading-6 text-gray-700'>{meal.strInstructions}</p>
          </div>
          <div className='flex gap-3 items-center'>
            <a href={meal.strYoutube} target="_blank"><AiFillYoutube className="text-red-600 text-5xl cursor-pointer" /></a>
            <p className='text-gray-500'>Watch on Youtube</p>
          </div>
        </div>
      )
      } 
    </>
  )
}

export default Detail