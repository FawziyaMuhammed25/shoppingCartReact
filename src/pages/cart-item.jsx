import {React , useContext} from "react";
import{ShopContext} from "../Context/Shop-Context" 
import { Navbar } from "../component/Navbar";
export const CartItem = (props)=>{
    const {id , productName , price , productImage} = props.data;
    const {cartItems ,addToCart , removeFromCart , upadteCartItem} = useContext(ShopContext)
   return (
    
    <div className="cartItem">
         <img src={productImage}/>
         <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>{price} EGP</p>
            <div className="countHandler">
                 <button className="btn" onClick={()=> removeFromCart(id)}> <p>-</p> </button>
                 <input value={cartItems[id]} onChange = {(e) => upadteCartItem( Number(e.target.value) , id) }/>
                 <button className="btn" onClick={()=> addToCart(id)}> <p>+</p></button>
            </div>
         </div>
    </div>
    
   );
    
}