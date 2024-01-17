import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import ShoppingItemContext from '../context/ShoppingItemsContext';

const Card = (props) => {

    const [count,setCounter]=useState(props.count);
    const ItemList=useContext(ShoppingItemContext)

    useEffect(()=>{
        const newList=ItemList.data.map((prod)=>{
            if(prod.id==props.id){
                prod.count=count;
            }
            return prod;
        })
        ItemList.setData(newList);
        console.log([...newList])
    },[count])
    
    const increaseCount=()=>{
          setCounter((prev)=>prev+1);
    }

    const decreaseCount=()=>{
        setCounter((prev)=>prev-1);
   }
  return (
    <div className='border-2 border-solid m-2 flex justify-between p-4 item-center bg-white shadow-sm '>
    <div>
        <h4>{props.name}</h4>
        <p>price:{props.price}</p>
    </div>
    <div className='flex gap-4 bg-gray-500 rounded-full px-4 items-center  text-white' >
      <span onClick={increaseCount}>+</span><span>{count}</span><span onClick={decreaseCount}>-</span>
    </div>

    </div>
  )
}

export default Card
