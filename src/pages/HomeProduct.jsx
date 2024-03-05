import React from "react";

export const HomeProduct = (props)=>{
   
    const {id , productName , price , productImage} = props.data;
   return <div className="product">
       
        <img src={productImage}/>
        <div className="description">
              <p> <b>{productName}</b></p>
              <p>{price} EGP</p>
        </div>
    </div>
}