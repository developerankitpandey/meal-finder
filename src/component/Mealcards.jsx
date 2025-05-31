import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({details}) => {
  return (
    <div className='meals'>
      {!details ? '' : details.map((curItem)=>{
        return(
          <>
          <div className="mealImg">
            <img src={curItem.strMealThumb} alt="" />
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
          </div>
          </>
        )
      })}
    </div>
  )
}

export default Mealcards;
