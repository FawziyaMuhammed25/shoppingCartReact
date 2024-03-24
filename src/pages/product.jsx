import React, { useContext } from "react";
import{ShopContext} from "../Context/Shop-Context" 
export const Product = (props)=>{
    const {id , productName , price , productImage} = props.data;
    const {addToCart , cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
   return <div className=" col-lg-4 col-md-6 col-sm-12  ">
       
      
   <div className="product" >
        <div className="">
                <img src={productImage} className="w-100 "/>
            </div>    
            <div className="description">
                <p> <b>{productName}</b></p>
                <p>{price} EGP</p>
            </div>
   </div>
        <button className="addToCartBtn" onClick={()=>addToCart(id)}>Add To Cart {cartItemAmount >0 && <>({cartItemAmount})</>} </button>
    </div>
}
