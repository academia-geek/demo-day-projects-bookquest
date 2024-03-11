import React, { useState } from 'react';
import '../Styles/StylosLoginBiblioteca.css'
import { useNavigate } from 'react-router-dom';

export default function Biblioteca() {
    const navigate = useNavigate();
    const [bibliotecaData, setBibliotecaData] = useState({
        name: '',
        isbn: '',
        api: '',
        email: '',
        latitude: '',
        longitude: '',
        nit: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setBibliotecaData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Biblioteca Data:', bibliotecaData);
        sessionStorage.setItem("DatosLoginBiblioteca", JSON.stringify(bibliotecaData)); // Almacena los datos en sessionStorage
        console.log("Datos Enviados..");
        navigate('/Detalles');
    };
    
    return (
        <div>
            <div className='content-form'>
                <form className='formBiblioteca' onSubmit={handleSubmit}>
                    <div className="input-row">
                        <input className='inputBiblioteca'
                            type="text"
                            id="name"
                            value={bibliotecaData.name}
                            onChange={handleChange}
                            placeholder='Nombre de la biblioteca'
                        />
                        <input className='inputBiblioteca'
                            type="text"
                            id="isbn"
                            value={bibliotecaData.isbn}
                            onChange={handleChange}
                            placeholder='ISB de la biblioteca'
                        />
                        <input className='inputBiblioteca'
                            type="text"
                            id="api"
                            value={bibliotecaData.api}
                            onChange={handleChange}
                            placeholder='API de tu Bilbioteca'

                        />
                        <input className='inputBiblioteca'
                            type="email"
                            id="email"
                            value={bibliotecaData.email}
                            onChange={handleChange}
                            placeholder='Email de tu Biblioteca'

                        />
                        <input className='inputBiblioteca'
                            type="text"
                            id="latitude"
                            value={bibliotecaData.latitude}
                            onChange={handleChange}
                            placeholder='Latitud de la biblioteca'
                        />
                        <input className='inputBiblioteca'
                            type="text"
                            id="longitude"
                            value={bibliotecaData.longitude}
                            onChange={handleChange}
                            placeholder='Longitud de la biblioteca'

                        />
                        <input className='inputBiblioteca'
                            type="number"
                            id="nit"
                            value={bibliotecaData.nit}
                            onChange={handleChange}
                            placeholder='NIT de la biblioteca'

                        />
                    </div>
                    <button type="submit" className='btnEnviarLibrary'>Enviar</button>
                </form>
            </div>
        </div>
    );
}