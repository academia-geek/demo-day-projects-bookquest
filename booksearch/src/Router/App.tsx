import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importaciones de componentes
import HomePage from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Api from '../components/Api';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/API' element={<Api/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
