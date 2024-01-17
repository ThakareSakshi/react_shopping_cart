import React from 'react'
import { useContext } from 'react'
import ShoppingItemContext from '../context/ShoppingItemsContext'

const CardItems = (props) => {

    const ItemList=useContext(ShoppingItemContext);
  return (
    <div className='p-6 border-solid border-gray-100 border-2 bg-gray-200 w-1/2'>
        <h2 className='font-bold '>Added to Cart</h2>
      {
      ItemList.data.map((prod)=>{
        
         if(prod.count>0){
            return  <div className='border-2 border-solid m-2 flex justify-between p-4 item-center bg-white shadow-sm '>
            <div>
                <h4>{prod.name}</h4>
               
            </div>
            <div className='flex gap-4 rounded-full px-4 items-center  text-md' >
             {prod.count} x {prod.price}
            </div>
        
            </div>
         }
       })
      }
    </div>
  )
}

export default CardItems
