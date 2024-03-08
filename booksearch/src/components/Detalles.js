import React, { useEffect, useState } from 'react';
import Footer from './Extra/Footer';
import Nav from './Extra/Nav';
import Slider from './Extra/Slider';
import { useNavigate, useLocation, useParams} from 'react-router-dom';
import '../Styles/Detalles.css';
import axios from 'axios';

export default function Detalles () {
    const navigate = useNavigate();
    const location = useLocation();
    const {cat} = useParams();
    console.log(cat)

    const [showPopup, setShowPopup] = useState(false);
    const [currentBookTitle, setCurrentBookTitle] = useState('');

    const [categorias, setCategorias] = useState([]);
    const [librosFiltrados, setLibrosFiltrados] = useState([]);


    const urls = [`https://biblioteca-el-raton.onrender.com/libros`,`https://biblioteca-el-chiguiro.onrender.com/libros`,`https://biblioteca-la-marzopa.onrender.com/libros`

]

    useEffect(() => {
        console.log("Fetching books for all URLs");
    
        // Realizar una sola solicitud para obtener todos los libros de todas las URL
        axios.all(urls.map(url => axios.get(url).then(response => response.data)))
            .then(axios.spread((...responses) => {
                // Combinar todos los resultados de las solicitudes en un solo array
                const allLibros = responses.flat();
                console.log("Received all books:", allLibros);
    
                // Obtener géneros únicos de todos los libros
                const generosUnicos = Array.from(new Set(allLibros.map(libro => libro.genero)));
                setCategorias(generosUnicos);
    
                // Filtrar los libros por categoría
                const librosFiltrados = allLibros.filter(libro => libro.genero === cat);
                console.log("Filtered books for category:", librosFiltrados);
                setLibrosFiltrados(librosFiltrados);
            }))
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [cat]);

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        return `rgb(${r}, ${g}, ${b})`;
    };

    const isDetallesPage = location.pathname === '/Detalles';
    const isDetallesRoute = location.pathname.startsWith("/Detalles/");

    return (
        <div>
            <Nav/>
            <div>
                {/* Contenedor del search */}
                <div className='contSearch'>
                    <input className='searchEs' type='search' placeholder='Busqueda'></input>
                    <button className='btnEs'>Buscar</button>
                </div>
                <div className='imgLibritos' style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
                    {isDetallesPage && (
                        <div className='ContMapeos'>
                            {categorias.map((genero, index) => (
                                <div className='contDetails' key={index} style={{ backgroundColor: getRandomColor() }} onClick={() => navigate(`/Detalles/${genero}`)}>{genero}</div>
                            ))}
                        </div>
                    )}
                    {isDetallesRoute && (
                        <div className='ContMapeos'>
                            {librosFiltrados.map((libro) => (
                                <div className='contDetailImagen' key={libro.id} onMouseEnter={() => {setShowPopup(true); setCurrentBookTitle(libro.titulo); }} onMouseLeave={() => setShowPopup(false)} onClick={() => navigate(`/Detalles/${cat}/${libro.titulo}`)}>
                                    <img className='imgLibro' src={libro.imagen} alt={libro.id}></img>
                                    {showPopup && <div className='popup'>{currentBookTitle}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
