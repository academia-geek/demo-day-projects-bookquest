import React, { useEffect, useState } from 'react';
import './Slider.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Slider() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    const [allLibros, setAllLibros] = useState([]);

    const urls = [
        `https://biblioteca-el-chiguiro.onrender.com/libros`,
        `https://biblioteca-el-raton.onrender.com/libros`,
        `https://biblioteca-la-marzopa.onrender.com/libros`
    ];

    useEffect(() => {
        console.log("Fetching books for all URLs");

        // Realizar una sola solicitud para obtener todos los libros de todas las URL
        axios
            .all(urls.map(url => axios.get(url).then(response => response.data)))
            .then(axios.spread((...responses) => {
                // Combinar todos los resultados de las solicitudes en un solo array
                const allLibros = responses.flat();
                console.log("Received all books:", allLibros);
                setAllLibros(allLibros);
            }))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[]);

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
