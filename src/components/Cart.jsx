import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../utils/CartSlice'

function Cart() {

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()

    function clearCartHandler() {
        dispatch(clearCart())
    }

    function deleteItemHandler(foodItem) {
        dispatch(removeItem(foodItem))
    }




  return (
    <div>
        <h1 className='text-2xl font-bold m-2' >Cart Items</h1>
      <div className="flex justify-center items-center "> <button
  onClick={() => clearCartHandler()}
  className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition self-center"
>
  Clear Cart
</button>
</div>
    {cartItems.map((foodItem)=>{

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
                    <button
  onClick={() => deleteItemHandler(foodItem)}
  className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition self-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="w-3.5 h-3.5"
  >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Zm3 .5a.5.5 0 0 1 .5-.5h.5v6a.5.5 0 0 1-1 0V6Z"/>
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118Z"/>
  </svg>
  </svg>
  Delete
</button>

                    
                </div>
            );

    })}
    </div>
  )
}

export default Cart
