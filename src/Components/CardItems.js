import React from "react";
import { useContext, useState } from "react";
import ShoppingItemContext from "../context/ShoppingItemsContext";

const CardItems = (props) => {
  const ItemList = useContext(ShoppingItemContext);

  const cartList = ItemList.data.filter((item) => item.count > 0);
  const [totalPrice, setTotalPrice] = useState(0);
  let temp=totalPrice;


  return (
    <div className="p-6 border-solid border-gray-100 border-2 bg-gray-200 w-1/2 relative">
      <h2 className="font-bold ">Added to Cart</h2>
      {cartList.length != 0 ? (
        cartList.map((prod) => {
          temp+=(prod.count*prod.price);
          return (
            <div className="border-2 border-solid m-2 flex justify-between p-4 item-center bg-white shadow-sm ">
              <div>
                <h4>{prod.name}</h4>
              </div>
              <div className="flex gap-4 rounded-full px-4 items-center  text-md">
                {prod.count} x {prod.price}
              </div>
            </div>
          );
        })
      ) : (
        <div>no product added to cart</div>
      )}
    
      <div className="absolute bottom-1 p-2 bg-white w-full">total Price:{temp} Rs.</div>
    </div>
  );
};

export default CardItems;
