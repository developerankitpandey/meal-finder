import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
  const {mealid} = useParams();
  const [info, setInfo] = useState();

  const getInfo = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    const jsonData = await get.json();
    setInfo(jsonData['meals'][0])
    console.log(jsonData['meals'][0])
  }
  if (info != ''){
    getInfo();
  }
  return (
    <div>
       { !info ? 'data not found' : 
       <div className="msg">
        <img src={info.strMealThumb} alt="" />
        <div className='info'>
          <button>{info['strMeal']}</button>
          <h1>Recipe Detail</h1>
          <h3>Instructions's</h3>
          { <p>{info['strInstructions']}</p>}
        </div>
       </div>}
    </div>
  )
}

export default Mealinfo;
