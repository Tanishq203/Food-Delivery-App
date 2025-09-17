import React from 'react'

function Search({restArr,setAllRestaurantArr}) {
  
  
  
  function handelSearch(searchedText){
    let filteredRestArr = restArr.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()))
    setAllRestaurantArr(filteredRestArr)
  }

  
  
  
  
    return (
      
    <input onChange={(e)=>handelSearch(e.target.value)} className='border-amber-400 rounded w-1/3 p-2 ml-20' type="text" placeholder="Search Restaurant here....." />
  )
}

export default Search










