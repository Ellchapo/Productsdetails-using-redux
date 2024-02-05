
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import { useState } from 'react';

function App() {

  const [show ,setShow]=useState(false);

  return (
    <BrowserRouter>
    <button onClick={()=>setShow(!show)}>Cart Details</button>
    {show && <Cart/>}

    <Routes>
      
    <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
     <div className="App">
     
     </div>
    </BrowserRouter>
   
  );
}

export default App;
