import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importaciones de componentes
import HomePage from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Api from '../components/Api';
import CrudAdminBook from '../components/Archivos-Importantes/CrudAdminBook';
import AutenticacionAdmin from '../components/Archivos-Importantes/AutenticacionAdmin';
import GoogleMaps from '../components/GoogleMaps';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/API' element={<Api/>} />
        <Route path='/CrudAdminBook' element={<CrudAdminBook/>} />
        <Route path='/AutenticacionAdmin' element={<AutenticacionAdmin/>} />
        <Route path='/GoogleMaps' element={<GoogleMaps/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
