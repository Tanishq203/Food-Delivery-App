import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addItem } from '../utils/CartSlice';

function RestaurantMenu() {
    const {id} =useParams();
    const [foodItemDetails,setFoodItemDetails] = useState([]);
    
    

    useEffect(()=>{
        async function calling(){
            let API = `/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
            let resp = await axios.get(API)
            console.log(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
            setFoodItemDetails(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        }
        calling()
    },[id])

    const dispatch =useDispatch()

    function handelAddItem(foodItem){
        dispatch(addItem(foodItem))
    }


  return (
    <div>
        <h1 className='text-center font-2xl font-bold'>List of items available for RESTAURANT :{id}</h1>
        {
            foodItemDetails.map((foodItem)=>{
                return (
                    <div className="flex w-3/5 mx-auto mb-10 border-b-4 p-4">
                        <div className="flex flex-col w-3/4">
                        <h1>{foodItem.card.info.name}</h1>
                        <h1>{foodItem.card.info.defaultPrice / 100}</h1>
                        <h1>{foodItem.card.info.category}</h1>
                        </div>
                        <img
                        className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
                        alt="" />

                        <button onClick={()=>handelAddItem(foodItem)} className="border bg-green-300 h-8 relative top-16 right-5">
                        Add +
                        </button>
                    </div>
                );
            })
        }
    </div>
  )
}

export default RestaurantMenu
