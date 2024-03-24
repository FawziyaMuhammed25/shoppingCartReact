import React from "react";

export const HomeProduct = (props)=>{
   
    const {id , productName , price , productImage} = props.data;
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
      
    </div>
}
