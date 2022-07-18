import React from 'react'
import{
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Index from '../../pages/Index';
import Resenas from '../../pages/Resenas';
import Contacto from '../../pages/Contacto';
import About from '../../pages/About';
import Login from '../../components/login/Login';


export const PublicRouter = () => {
  return (
    <div>
        <Route path="/resenas" element={<Resenas />}/>
        <Route path="/miEspacio" element={<MiEspacio />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>  
    </div>
  )
}
