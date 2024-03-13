import React, { useState } from 'react';
import '../Styles/StylosLoginBiblioteca.css'
import { useNavigate } from 'react-router-dom';
import { AñadirLibrary } from '../redux/Actions/AgregarLibro'
import { useDispatch } from 'react-redux';
// import { Nominatim } from 'geocoding-library'; 

export default function Biblioteca() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [bibliotecaData, setBibliotecaData] = useState({
        nombre: '',
        contraseña: '',
        api: '',
        email: '',
        dirección: '',
        nit: ''
    });

    const AlmacenarDatosBiblioteca = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        console.log("AlmacenarDatosBiblioteca");
        try {
            console.log("Entering Almacenar Datos...");
            // Usar los valores ingresados por el usuario en el formulario
            const bibliotecaDataToSend = {
                nombre: bibliotecaData.nombre,
                contraseña: bibliotecaData.contraseña,
                api: bibliotecaData.api,
                email: bibliotecaData.email,
                dirección: bibliotecaData.dirección,
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
                            id="nombre"
                            value={bibliotecaData.nombre}
                            onChange={handleChange}
                            placeholder='Nombre de la biblioteca'
                        />
                        <input className='inputBiblioteca'
                            type="password"
                            id="contraseña"
                            value={bibliotecaData.contraseña}
                            onChange={handleChange}
                            placeholder='Contraseña'
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
                            id="dirección"
                            value={bibliotecaData.dirección}
                            onChange={handleChange}
                            placeholder='Dirección'
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
