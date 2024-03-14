import React, { useEffect, useState } from 'react';
import './Slider.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { obtenerDatosBiblioteca } from '../../redux/Actions/AgregarLibro'

export default function Slider() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    const [allLibros, setAllLibros] = useState([]);

    // Obtener las URLs de las bibliotecas
    useEffect(() => {
        const obtenerYMostrarDatos = async () => {
            try {
                const datos = await obtenerDatosBiblioteca();
                const urls = datos.flatMap(biblioteca => biblioteca.urls);
                console.log("URLs de bibliotecas:", urls);
                // Realizar una sola solicitud para obtener todos los libros de todas las URL
                const responses = await Promise.all(urls.map(url => axios.get(url)));
                const libros = responses.map(response => response.data).flat();
                console.log("Libros recibidos:", libros);
                setAllLibros(libros);

            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        
        obtenerYMostrarDatos();
    }, []);

    return (
        <section className="containerS">
            <div className='slider-wrapper'>
                <div className='slider'>
                    {/* Logicamente se va a hacer un Mapeo  de las imagenes de los Libros
                        Estaremos con esta para las pruebas y Etc
                    */}
                    {allLibros.slice(currentPage * 6, (currentPage + 1) * 6).map((libro, index) => (
                        <img id={index} className='ImgSLIDER' style={{cursor: "pointer"}} src={libro.imagen} alt={libro.id} onClick={() => navigate(`/Detalles/${libro.genero}/${libro.titulo}`)}></img>
                    ))}
                </div>
                <div className='slider-nav'>
                    <a onClick={() => changePage(0)} className='slider-button'></a>
                    <a onClick={() => changePage(1)} className='slider-button'></a>
                    <a onClick={() => changePage(2)} className='slider-button'></a>
                </div>
            </div>
        </section>
    );
}
