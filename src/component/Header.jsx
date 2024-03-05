import {React , useContext} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Header =() =>{
   

    return( <div>
        
        <div className="navbar">
             <NavLink className="logo" to="/">Shopping Online</NavLink>
             
            <div className="links">
             
               

                <NavLink className="logOut" to="/register" >
                    SignIn
                </NavLink>
           
            </div>
            
        </div>
        </div>
    );
}
