import React, {useState, useEffect} from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
/* paths */
import { ABOUT, ADMIN, CONTACTO, HOME, LOGIN, LOGOUT, MIESPACIO, RESENAS } from "./backEnd/routes/paths";

import Index from "./pages/Index";
import Resenas from "./pages/Resenas";
import MiEspacio from "./pages/MiEspacio";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import AdminPanel from "./pages/AdminPanel";
import Login  from "./components/login/Login";
import { Logout } from "./components/login/Logout";

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
      <Route path={HOME} element={<Index isAdmin={adminGlobal} />}/>
      <Route path={RESENAS} element={<Resenas />}/>
      <Route path={MIESPACIO} element={<MiEspacio />}/>
      <Route path={CONTACTO} element={<Contacto />}/>
      <Route path={ABOUT} element={<About />}/>
      <Route path={LOGIN} element={<Login />}/> 
      <Route path={ADMIN} element={<AdminPanel />}/> {/* Proteger Rutas Publicas y Privadas con react router dom v6 */}
      <Route path={LOGOUT} element={<Logout />}/>
    </Routes>
  </BrowserRouter>
    </>
     
       
  );
}

export default App;
