import React from 'react'
import { useContext } from 'react'
import Card from './Card'
import ShoppingItemContext from '../context/ShoppingItemsContext'

const ShoopingCards = () => {

const Itemlist=useContext(ShoppingItemContext);
console.log(Itemlist);
  return (
    <div className="p-6 border-solid border-gray-100 border-2 bg-gray-200 w-1/2">
        <h2 className='font-bold '>List items</h2>
        {
            Itemlist.data.map((prod)=><Card key={prod.id}  {...prod}/>)
        }
      
    </div>
  )
}

export default ShoopingCards
