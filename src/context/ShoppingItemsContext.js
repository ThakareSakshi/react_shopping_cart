 import React from "react";
 import ItemList from "../Components/ItemList.json"
 import { createContext,useState } from "react";

 const ShoppingItemContext=createContext();




  export const ShoppingList=(props)=>{
   
    const [data,setData]=useState([...ItemList]);


    return (
        <ShoppingItemContext.Provider value={{data,setData}}>
          {
            props.children
          }
        </ShoppingItemContext.Provider>
    )
 }

 export default ShoppingItemContext;