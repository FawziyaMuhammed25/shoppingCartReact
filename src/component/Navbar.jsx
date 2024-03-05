import {React , useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ShopContext} from "../Context/Shop-Context" 
import "./Navbar.css";
export const Navbar =() =>{
    const {Count } = useContext(ShopContext)
    let name = localStorage.getItem("Name")
    let myName = JSON.parse(name)

    return( <div>
        
        <div className="navbar">
             <NavLink className="logo" to="/shop">Shopping Online</NavLink>
             <h4 style={{color:"white"}}>Welcome ya <span className="text-info " style={{fontStyle:"italic"}}>{myName}</span> </h4>
            <div className="links">
             
                <NavLink   to="/cart">   
                   <FontAwesomeIcon icon="cart-shopping"/>
                   &nbsp;&nbsp;
                  <span> Cart </span>
                  <span id="number" style={{display : "block"}} >
                    {
                        Count()
                    }
                   </span>
                </NavLink>

                <NavLink className="logOut" to="/login" >
                    LogOut
                </NavLink>
           
            </div>
            
        </div>
        </div>
    );
}

