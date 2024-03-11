import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Importa tus componentes
import HomePage from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Api from '../components/Api';
import CrudAdminBook from '../components/Archivos-Importantes/CrudAdminBook';
import AutenticacionAdmin from '../components/Archivos-Importantes/AutenticacionAdmin';
import GoogleMaps from '../components/GoogleMaps';
import CrudBookBilbiotecas from '../components/Archivos-Importantes/CrudBookBilbiotecas';
import PrivateRoute from './PrivateRoute';
import Detalles from '../components/Detalles';
import { Conocenos } from '../components/Conocenos';
import Nav from '../components/Extra/Nav';
import Biblioteca from '../components/Biblioteca';
import ProfileUser from '../components/ProfileUser';

function App() {
  const [user, setUser] = useState(false);

  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth?.uid) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, [setUser]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Conocenos" element={<Conocenos />} />
        {/* Rutas privadas */}
        <Route path='/Detalles' element={<Detalles />} />
        <Route path="/Detalles/:cat" element={<Detalles />} />
        <Route path="/Detalles/:cat/:librit" element={<Detalles />} />
        <Route path="/API" element={<Api/>}/>
        <Route path="/CrudAdminBook" element={<CrudAdminBook/>}/>
        <Route path="/Biblioteca" element={<Biblioteca/>}/>
        <Route path="/ProfileUser" element={<ProfileUser />} />
        {/* <Route path="/Biblioteca" element={<Biblioteca/>}/> */}
        <Route path="/AutenticacionAdmin" element={<AutenticacionAdmin/>}/>
        <Route path="/CrudBookBilbiotecas" element={<CrudBookBilbiotecas/>}/>
        <Route path="/Nav" element={<Nav/>}/>
        <Route path="/GoogleMaps" element={<GoogleMaps/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
