import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {React } from "react";
import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
 import "./App.css" ;
import { Shop } from './pages/shop';
import { Cart } from './pages/cart';
import { ShoppingContextProvider } from './Context/Shop-Context';
import { Home } from './pages/Home';
import { Register } from './pages/register';
import { Login } from './pages/Login';
const App =()=>
{
  
   
 return(
  
    <div className="App" >
      <ShoppingContextProvider>
         <Router>
        
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path="/shop" element={<Shop/>} />
               <Route path="/cart" element={<Cart/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/login' element ={<Login/>} />
            </Routes>
         </Router>
       </ShoppingContextProvider>
    </div>
 );
}

export default App;
library.add(fab, fas, far);
