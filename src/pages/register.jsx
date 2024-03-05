
import React, { useState } from "react";
import { Login } from "./Login";
export const Register = ()=>{
    
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [login , setLogin] = useState(true);
    const [flag , setFlag]= useState(false);
    function handelSUbmit(e) {
        e.preventDefault();
        if(!name || !email || !pass){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Name" , JSON.stringify(name));
            localStorage.setItem("Email" , JSON.stringify(email));
            localStorage.setItem("password" , JSON.stringify(pass));

            console.log("saved")
            setLogin(!Login);
        }
    }
    function handelClick() {
        setLogin(!Login);
        
    }
   
  return  <div>
              
             

                {
                    login ? (
                        <form  onSubmit={handelSUbmit} className="container my-5 p-5 rounded-4" style={{background:"#ddd"}}>
                        <div className="row">
                        <div className="col">
                            <label for="fn" >Name</label>
                            <input type="text" className="form-control"  aria-label="name" onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        
      
                        </div>
                        <div className="mt-4">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} aria-describedby="emailHelp"/>
                        </div>
                        <div className="my-3 ">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setPass(e.target.value)}/>
                        </div>
                        <button type="submit"  className="border border-0 rounded-2 py-2 px-4 bg-black text-white">Submit</button>
                         <p onClick= {()=>handelClick()}>Aready registered{" "} login in ?</p>
                         {flag &&(
                              <p  className="text-danger">
                                  please fill every field
                              </p>
                          )}
                    </form>
                    ):(
                        <Login/>
                    )
                }
             
              </div>
}
