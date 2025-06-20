import React, { useState } from 'react'
import Mealcards from './Mealcards';


const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  }

  const myFun = async () => {
   if(search == ""){
     setMsg("Please enter something")
   } else {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await get.json()
    setData(jsonData.meals)
    setMsg("")
   }
  }
  return (
   <>
    <h1>FOOD RECIPE APP</h1>
      <div className="container">
         <div className="searchBar">
            <input type="text" className="input" placeholder='Enter Dishes here' onChange={handleInput} />
            <button onClick={myFun}>Search</button>
         </div>
         <h4 className='error'>{msg}</h4>
        <Mealcards details={data}/>
      </div>
   </>
  )
}

export default Mainpage;
