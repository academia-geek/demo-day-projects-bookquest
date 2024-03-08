import React, { useEffect } from 'react'
import Footer from './Extra/Footer'
import Nav from './Extra/Nav'
import Slider from './Extra/Slider'
import { useNavigate, useLocation, useParams} from 'react-router-dom';
import '../Styles/Detalles.css'
export default function Detalles () {
    const navigate = useNavigate();
    const location = useLocation()
    const {cat} = useParams
    console.log(cat)

    const categorias = [
        "All",
        "Accion",
        "Ciencia",
        "Fantasia",
        "Misterio",
        "Manga",
        "Terror",
        "Niños",
        "Romance",
        "Aventura"
    ]

    const libros = [
        {id:1, titulo: "Libro 1", categorias: "Accion"},
        {id:2, titulo: "Libro 2", categorias: "Ciencia"},
        {id:3, titulo: "Libro 3", categorias: "Fantasia"},
        {id:4, titulo: "Libro 4", categorias: "Misterio"},
        {id:5, titulo: "Libro 5", categorias: "Manga"},
        {id:6, titulo: "Libro 6", categorias: "Terror"},
        {id:7, titulo: "Libro 7", categorias: "Niños"},
        {id:8, titulo: "Libro 8", categorias: "Romance"},
        {id:9, titulo: "Libro 9", categorias: "Aventura"}
    ]

    const librosFiltrados = libros.filter((libro) => libro.categoria === cat);

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
            {/*contenedor del search*/}
            <div className='contSearch'>
                <input className='searchEs' type='search' placeholder='Busqueda'></input>
                <button className='btnEs'>Buscar</button>
            </div>
            <div className='imgLibritos' style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
                {isDetallesPage && ( // Render contmapeos only if on /Detalles
                    <div className='ContMapeos'>
                        {categorias.map((categoria, index) => (
                            <div className='contDetails' key={index} style={{ backgroundColor: getRandomColor() }} onClick={() => console.log(categoria) && navigate(`/Detalles/${categoria}`)}>{categoria}</div>
                        ))}
                    </div>
                )}
                {isDetallesRoute && ( // Render contmapeos only if on /Detalles
                    <div className='ContMapeos'>
                        {librosFiltrados.map((libro) => (
                            <div className='contDetails' key={libro.id} style={{ backgroundColor: getRandomColor() }} onClick={() => navigate(`/Detalles/${cat}/${libro.titulo}`)}>{libro.titulo}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        <Footer/>
    </div>
  );
}
