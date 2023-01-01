import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    //axios
    const getMeals = async () => {
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        //console.log(data.meals);
        setMeals(data.meals);
    };
    useEffect(() => {
        getMeals();
    },[]);

  return (
    // <div>
    //     {meals?.map(meal => <h1 key={meal.idMeal}>{meal.strMeal}</h1>)}
    // </div>
    <div className='flex flex-wrap gap-5  py-10 '>
        {meals?.map((meal) => 
            <Card key={meal.idMeal} meal={meal} />
        )}
    </div>
  )
}

export default Meals