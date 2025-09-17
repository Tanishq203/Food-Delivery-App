import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Apicalling from './Apicalling'
import Search from './Search';
import { Link } from 'react-router-dom';


function Body() {

    let restArr = Apicalling(); // Take time in this sinario useEffect comes to picture

    const [allRestaurantArr,setAllRestaurantArr] = useState(restArr);
    const [isActive1,setIsActive1]=useState(false); //rating
    const [isActive2,setIsActive2]=useState(false); //reset

    useEffect(()=>{
      if(restArr && restArr.length){
        setAllRestaurantArr(restArr)
      }
    },[restArr])


    function handelClick(restArr){
     let ratingFilteredArr = restArr.filter((Restaurant)=>Restaurant.info.avgRating >= 4.5)
      setAllRestaurantArr(ratingFilteredArr)
      setIsActive1(true)
      setIsActive2(false)
    }

    function handelReset(){
     
      setAllRestaurantArr(restArr)
      setIsActive1(false)
      setIsActive2(true)
    }


  return (
    <div>
        <h1 className='font-bold text-2xl m-10'>Restaurants with online food delivery in your area</h1>
        <Search restArr={restArr} setAllRestaurantArr={setAllRestaurantArr}/>
        <button onClick={()=>handelClick(restArr)} className={isActive1? 'text-lg border rounded-xl w-1/12 ml-20 bg-amber-400':'text-lg border rounded-xl w-1/12 ml-20'}>Rating 4.5+</button>
        <button onClick={()=>handelReset(restArr)} className={isActive2? 'text-lg border rounded-xl w-1/12 ml-10 bg-amber-400':'text-lg border rounded-xl w-1/12 ml-10' }>Reset</button>
        <div className='flex flex-wrap m-auto w-10/11'>
           {
            allRestaurantArr.map((item)=>{
                return(
                  <Link to={`restaurant/${item.info.id}`}>
                    <RestaurantCard item={item} />
                    </Link>
                )
            })
           }
        </div>
    </div>
  )
}

export default Body










