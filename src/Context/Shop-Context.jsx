import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null);
const getCart =()=>{
    let cart ={}
    for (let i = 0; i < PRODUCTS.length +1; i++) {
       cart[i]=0;
        
    }
    return cart;
};
export const ShoppingContextProvider = (props)=>{
    const [cartItems , setCartItems] = useState(getCart);

    const getTotalCartAmount=()=>{
        let totalAmount =0 ;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find( (product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
            
        }
        return totalAmount;
    }
    const Count =() =>{
        let totalCount =0 ;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                // let itemInfo = PRODUCTS.find( (product) => product.id === Number(item));
                totalCount += cartItems[item] 
            }
            
        }
        return totalCount;
    }
    
    const addToCart =(itemId)=>{
          setCartItems((prev)=>({...prev , [itemId]:prev[itemId]+1}))
    };
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
  };
  const upadteCartItem =( newAmount,itemId)=>{
          setCartItems ((prev) => ({...prev , [itemId]:newAmount}))
  }
  const contextValue ={cartItems , addToCart , removeFromCart , upadteCartItem , getTotalCartAmount , Count}
//   console.log(cartItems)
   return (
   <ShopContext.Provider value={contextValue}>
    {props.children}</ShopContext.Provider>
    );
}