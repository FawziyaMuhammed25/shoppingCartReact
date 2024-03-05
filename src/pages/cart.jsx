import {React, useContext} from "react";
import { PRODUCTS } from "../products";
import{ShopContext} from "../Context/Shop-Context" 
import { CartItem } from "./cart-item";
import "./cart.css"
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/Navbar";
export const Cart = ()=>{
    const {cartItems , getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount() ;
    const navigate = useNavigate()
   return  <>
   <Navbar/> <div className="cart">
   
    <div>
        <h1 style={{marginTop : "50px"}}>Your Cart Items</h1>
    </div>
    <div className="cartItems">
        {PRODUCTS.map((product)=>{
            if(cartItems[product.id] !== 0 ){
                return<CartItem data = {product}/>
            }
        })}
    </div>
      
        {totalAmount >0 ?(
                       <div className="checkout">
                       <h4 > SubTotal : {totalAmount} EGP </h4>
                       <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                     </div>
            )
            : (
                <div className="checkout">
                    <h2 className="text">Your Cart is Empty</h2>
                    <button  onClick={() => navigate("/")} style={{margin :"auto" , marginLeft :"50px"}}> Click Here </button>   
            </div>    
            )
        }
      
    </div>
    </>
}