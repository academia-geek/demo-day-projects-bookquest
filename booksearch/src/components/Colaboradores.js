import React, { useEffect, useState } from 'react';
import Footer from './Extra/Footer';
import Nav from './Extra/Nav';
import { useNavigate } from 'react-router-dom';
import '../Styles/Detalles.css';
import axios from 'axios';
import Slider from './Extra/Slider';
import GoogleMaps from './GoogleMaps';
import { obtenerDatosBiblioteca } from '../redux/Actions/AgregarLibro'

export const Colaboradores = () => {
    const navigate = useNavigate();
    const [datosBiblio, setDatosBiblio] = useState([])

    // Obtener las URLs de las bibliotecas
    useEffect(() => {
        const obtenerYMostrarDatos = async () => {
            try {
                const datos = await obtenerDatosBiblioteca();
                console.log(datos)
                setDatosBiblio(datos)
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        obtenerYMostrarDatos();
    }, []);

    
  return (
    <div>
            <Nav />
            <div>
                <div className='imgLibritos' style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
                    <div className='fondoBlanco' style={{display:"flex", justifyContent:"center"}}>
                        <button className='btnAtras' onClick={() => navigate(-1)}>Atras</button>
                        <div style={{display:"flex", alignItems:"center", flexDirection:"column", gap:"20px"}}>
                            {datosBiblio.map((Bib) => (
                            <div style={{cursor:"pointer", width:"80%", justifyContent:"center", gap:"10px", backgroundColor:"#D9D9D9", padding:"20px", borderRadius:"10px"}} onClick={()=>navigate(`/Detalles/${Bib.NombreB}`)}>
                                <h1 className='texTo'>Biblioteca {Bib.NombreB}</h1>
                                <p className='texTo2'>{Bib.desc}</p><br></br>
                                <p className=''>Comunicate con nosotros al correo: {Bib.email}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
  )
}
