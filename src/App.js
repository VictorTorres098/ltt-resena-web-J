import React, {useState, useEffect} from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from "./pages/Index";
import Resenas from "./pages/Resenas";
import MiEspacio from "./pages/MiEspacio";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";
import Login  from "./components/login/Login";

import firebaseApp from "./backEnd/credenciales";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(firebaseApp);


function App() { 
  const [adminGlobal, setAdminGlobal] = useState(null);
    onAuthStateChanged(auth, (adminFirebase) => {
      if(adminFirebase){
        //cod en caso que se haya conectado el admin
        setAdminGlobal(adminFirebase);
      }else{
        //en caso que cierre sesion
        setAdminGlobal(null);
      }
      console.log(adminGlobal)
    });


  return (
    <>
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index isAdmin={adminGlobal} />}/>
      <Route path="/resenas" element={<Resenas />}/>
      <Route path="/miEspacio" element={<MiEspacio />}/>
      <Route path="/contacto" element={<Contacto />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/Admin" element={<AdminPanel />}/> {/* Proteger Rutas Publicas y Privadas con react router dom v6 */}
      <Route path="/login" element={<Login />}/>  
    </Routes>
  </BrowserRouter>
    </>
     
       
  );
}

export default App;
