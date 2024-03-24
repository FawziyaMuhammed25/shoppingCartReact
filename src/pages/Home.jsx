import React from "react";
import {PRODUCTS} from "../products";
import './shop.css'
import { HomeProduct } from "./HomeProduct";
import { Header } from "../component/Header";
export const Home = ()=>{
  return  <div className="shop">
              <Header/>
            <div className="shopTitle">
                <h1>Shopping OnLine</h1>
            </div>
            <div className="row">
                     {PRODUCTS.map( (product) =>(
                         <HomeProduct data={product}/>
                     )) }
            </div>
    </div>
}
