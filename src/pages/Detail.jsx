import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';

const Detail = () => {
  const {id} = useParams();
  const [meal , setMeal ] = useState({});
  const getSingleMeal = async() => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals);
    setMeal(data?.meals[0]);
  }
  useEffect(() => {
    getSingleMeal();
  },[])
  return (
    <div>
      <img src={meal.strMealThumb} alt="" width={"300px"} className="rounded-xl shadow" />
      <div>{meal.strCategory}</div>
      <h1>{meal.strMeal}</h1>
      <div>
        <h2>Instruction</h2>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  )
}

export default Detail