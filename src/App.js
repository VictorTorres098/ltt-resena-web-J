import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Index from "./pages/Index";
import Resenas from "./pages/Resenas";
import MiEspacio from "./pages/MiEspacio";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";



function App() {
  return (
    <>
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/resenas" element={<Resenas />}/>
      <Route path="/miEspacio" element={<MiEspacio />}/>
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/Admin" element={<AdminPanel />}/>  
    </Routes>
  </BrowserRouter>
    </>
     
       
  );
}

export default App;
