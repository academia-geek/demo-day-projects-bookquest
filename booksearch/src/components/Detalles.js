import React, { useEffect, useState } from 'react';
import Footer from './Extra/Footer';
import Nav from './Extra/Nav';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../Styles/Detalles.css';
import axios from 'axios';
import Slider from './Extra/Slider';
import GoogleMaps from './GoogleMaps';
import { obtenerDatosBiblioteca } from '../redux/Actions/AgregarLibro'

export default function Detalles() {
    const navigate = useNavigate();
    const location = useLocation();
    const { cat, librit } = useParams();
    const encodedCat = encodeURIComponent(cat);
    const encodedLibrit = encodeURIComponent(librit);

    const [showPopup, setShowPopup] = useState(false);
    const [allLibros, setAllLibros] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [librosFiltrados, setLibrosFiltrados] = useState([]);
    const [libritoMayor, setLibritoMayor] = useState([]);

    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
    const [segundoFiltro, setSegundoFiltro] = useState([])

    
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

                // Obtener géneros únicos de todos los libros
                const generosUnicos = Array.from(new Set(libros.map(libro => libro.genero)));
                setCategorias(generosUnicos);

                // Filtrar los libros por categoría
                const librosFiltrados = libros.filter(libro => cat === 'All' || libro.genero === cat);
                console.log("Libros filtrados por categoría:", librosFiltrados);
                setLibrosFiltrados(librosFiltrados);

                // Elegir un libro exacto
                const libroExacto = libros.filter(exacto => exacto.titulo === librit);
                console.log("Libro exacto encontrado:", libroExacto);
                setLibritoMayor(libroExacto);

            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        
        obtenerYMostrarDatos();
    }, [cat, librit]);

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        return `rgb(${r}, ${g}, ${b}, 0.7)`;
    };

    useEffect(() => {
        // Filtrar los libros por el término de búsqueda
        const filteredBooks = librosFiltrados.filter(libro =>
            libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSegundoFiltro(filteredBooks);
    }, [searchTerm, librosFiltrados]); // Escuchar cambios en el término de búsqueda y la lista de libros

    const isDetallesPage = location.pathname === `/Detalles`;
    const isDetallesCat = location.pathname === `/Detalles/${encodedCat}`;
    const isDetallesLibro = location.pathname === `/Detalles/${encodedCat}/${encodedLibrit}`;

    return (
        <div>
            <Nav />
            <div>
                {/* Contenedor del search */}
                <div className='contSearch'>
                    <input className='searchEs' type='search' placeholder='Busqueda' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                    <button className='btnEs'>Buscar</button>
                </div>
                <div className='imgLibritos' style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
                    <div className='fondoBlanco'>
                        <button className='btnAtras' onClick={() => navigate(-1)}>Atras</button>
                        {isDetallesPage && (
                            <div className='ContMapeos'>
                                <div className='contDetails' style={{ backgroundColor: getRandomColor() }} onClick={() => navigate(`/Detalles/All`)}>
                                    All
                                </div>
                                {categorias.map((genero, index) => (
                                    <div className='contDetails' key={index} style={{ backgroundColor: getRandomColor() }} onClick={() => navigate(`/Detalles/${genero}`)}>{genero}</div>
                                ))}
                            </div>
                        )}
                        {isDetallesCat && (
                            <div className='ContMapeos'>
                                {segundoFiltro.map((libro) => (
                                    <div
                                        key={libro.id}
                                        className='contDetailImagen'
                                        onMouseEnter={() => setShowPopup(true)}
                                        onMouseLeave={() => setShowPopup(false)}
                                        onClick={() => navigate(`/Detalles/${libro.genero}/${libro.titulo}`)}
                                    >
                                        <img className='imgLibro' src={libro.imagen} alt={libro.id}></img>
                                        {showPopup && (
                                            <div className='popup'>
                                                <span className='boldP'>Titulo:</span> {libro.titulo}<br></br>
                                                <span className='boldP'>Genero:</span> {libro.genero}<br></br>
                                                <span className='boldP'>Autor:</span> {libro.autor}<br></br>
                                                <span className='boldP'>Publicacion:</span> {libro.año_publicacion}<br></br>
                                                <span className='boldP'>Isbn:</span> {libro.isbn}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {isDetallesLibro &&
                            <div className='ContCosiaco'>
                                {libritoMayor.map((exacto) => (
                                    <div className='contenedorDetalleLibro columna' style={{ gap: "50px" }} key={exacto.id}>
                                        <div className='contenedorDetalleLibro'>
                                            <img className='imgLibroDet' src={exacto.imagen} alt={exacto.id}></img>
                                            <div className='contDetLib'>
                                                <span className='resaltado2'>Titulo:</span> {exacto.titulo}<br></br>
                                                <span className='resaltado2'>Genero:</span> {exacto.genero}<br></br>
                                                <span className='resaltado2'>Autor:</span> {exacto.autor}<br></br>
                                                <span className='resaltado2'>Publicacion:</span> {exacto.año_publicacion}<br></br>
                                                <span className='resaltado2'>Isbn:</span> {exacto.isbn}<br></br>
                                                <span className='resaltado2'>Sinopsis:</span> {exacto.sinopsis}
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", gap: "15px" }}>
                                            <h1 className='h1SlideDetalle'>Tambien te puede interesar<br></br>según tu categoria</h1>
                                            <div className='slider'>
                                                {/*aqui dejar solo un mapeo, puse dos pq el slide quedaba flojito xd*/}
                                                {librosFiltrados.map((libro) => (
                                                    <img id='slider-1' className='ImgSLIDER' style={{ cursor: "pointer" }} src={libro.imagen} alt={libro.id} onClick={() => navigate(`/Detalles/${libro.genero}/${libro.titulo}`)}></img>
                                                ))}
                                                {librosFiltrados.map((libro) => (
                                                    <img id='slider-1' className='ImgSLIDER' style={{ cursor: "pointer" }} src={libro.imagen} alt={libro.id} onClick={() => navigate(`/Detalles/${libro.genero}/${libro.titulo}`)}></img>
                                                ))}
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", gap: "30px" }}>
                                            <GoogleMaps />
                                            {/*info de la biblioteca y que tales*/}
                                            <div className='contDetLib' style={{ width: "500px" }}>
                                                <span className='resaltado2'>Titulo:</span> {exacto.titulo}<br></br>
                                                <span className='resaltado2'>Genero:</span> {exacto.genero}<br></br>
                                                <span className='resaltado2'>Autor:</span> {exacto.autor}<br></br>
                                                <span className='resaltado2'>Publicacion:</span> {exacto.año_publicacion}<br></br>
                                                <span className='resaltado2'>Isbn:</span> {exacto.isbn}<br></br>
                                                <span className='resaltado2'>Sinopsis:</span> {exacto.sinopsis}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
