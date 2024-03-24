import React from "react";
import {PRODUCTS} from "../products"
import { Product } from "./product";
import { Navbar } from "../component/Navbar";
import './shop.css'
export const Shop = ()=>{
  return <> <Navbar/>
   <div className="shop">
             
            <div className="shopTitle">
                <h1>Shopping OnLine</h1>
            </div>
            <div className="row">
                     {PRODUCTS.map( (product) =>(
                         <Product data={product}/>
                     )) }
            </div>
    </div>
    </>
}
