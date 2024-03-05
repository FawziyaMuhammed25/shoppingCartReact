import React ,{useState} from "react";
import { NavLink, json } from "react-router-dom";
 import { Shop } from "./shop";

export const Login = ()=>{
  
  const [emaillog, setEmaiLog] = useState("");
  const [passLog , setPassLog] = useState("");
  const [shop , setShop] = useState(true);
  const [flag , setFlag]= useState(false);

  function handelLogin(e) {
    e.preventDefault();
    let password = localStorage.getItem("password")
    let email = localStorage.getItem("Email")
    let mail = JSON.parse(email)
    let pass = JSON.parse(password)
    if( !emaillog || !passLog){
          setFlag(true)
       
    }else if (passLog !== pass || emaillog !== mail) {
      setFlag(true)
    
    }else{
     
      setShop(!shop);
      setFlag(false)
    }
    
  }



  return  <div >
  
   { shop ?(
    
    <form onSubmit={handelLogin} className="container my-5 p-5 rounded-4" style={{background:"#ddd"}}>
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=> setEmaiLog(e.target.value)}/>
          <div id="emailHelp" className="form-text">Do you have an account ? <NavLink to="/register" >Register</NavLink></div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e)=> setPassLog(e.target.value)}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Remember Me</label>
        </div>
        <button type="submit"  className="border border-0 rounded-2 py-2 px-4 bg-black text-white" >Login</button>
                         {flag &&(
                              <p  className="text-danger">
                                  please fill correct info
                              </p>
                          )}
        </form>
      
   )
     :(
      <Shop/>
     )
   }
        
     
 
            
    </div>
}