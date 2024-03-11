import React, { useState } from 'react';
import '../Styles/StylosLoginBiblioteca.css'
import { useNavigate } from 'react-router-dom';
import { AñadirLibrary } from '../redux/Actions/AgregarLibro'
import { useDispatch } from 'react-redux';


export default function Biblioteca() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [bibliotecaData, setBibliotecaData] = useState({
        name: '',
        isbn: '',
        api: '',
        email: '',
        latitude: '',
        longitude: '',
        nit: ''
    });

    const AlmacenarDatosBiblioteca = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        console.log("AlmacenarDatosBiblioteca");
        try {
            console.log("Entering Almacenar Datos...");
            // Usar los valores ingresados por el usuario en el formulario
            const bibliotecaDataToSend = {
                name: bibliotecaData.name,
                isbn: bibliotecaData.isbn,
                api: bibliotecaData.api,
                email: bibliotecaData.email,
                latitude: bibliotecaData.latitude,
                longitude: bibliotecaData.longitude,
                nit: bibliotecaData.nit
            };
            // Llama a la acción AñadirLibrary con los datos de la biblioteca
            dispatch(AñadirLibrary(bibliotecaDataToSend));
            console.log("Envio los Datos Correctamente.. ");
        } catch (error) {
            console.error("Hubo un problema en el BibliotecaData...", error);
        }
    };
    
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setBibliotecaData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div>
            <div className='content-form'>
                <form className='formBiblioteca'>
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
                            placeholder='Nit de la biblioteca'
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
                    <button type="submit" className='btnEnviarLibrary' onClick={AlmacenarDatosBiblioteca}>Enviar</button>
                </form>
            </div>
        </div>
    );
}