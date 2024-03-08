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
      {/* Rutas privadas */}
      <Route path="/API" element={<Api/>}/>
      <Route path="/CrudAdminBook" element={<CrudAdminBook/>}/>
      <Route path="/AutenticacionAdmin" element={<AutenticacionAdmin/>}/>
      <Route path="/CrudBookBilbiotecas" element={<CrudBookBilbiotecas/>}/>
      <Route path="/GoogleMaps" element={<GoogleMaps/>}/>
    </Routes>
  </BrowserRouter>
  

  );
}

export default App;
