import React, { useState } from 'react';
import '../Styles/StylosLoginBiblioteca.css'
import { useNavigate } from 'react-router-dom';
import { AñadirLibrary } from '../redux/Actions/AgregarLibro'
import { useDispatch } from 'react-redux';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { Formik, Form, Field } from 'formik';
import { GeoPoint } from 'firebase/firestore';


export default function Biblioteca() {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [bibliotecaData, setBibliotecaData] = useState({
        NombreB: '',
        contra: '',
        urls: '',
        email: '',
        Latitud: '',
        Longitud: '',
        NIT: ''
    });

    const AlmacenarDatosBiblioteca = async (event) => {
        // event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        console.log("AlmacenarDatosBiblioteca");
        try {
            console.log("Entering Almacenar Datos...");
            // Usar los valores ingresados por el usuario en el formulario
            const bibliotecaDataToSend = {
                NombreB: bibliotecaData.NombreB,
                contra: bibliotecaData.contra,
                urls: bibliotecaData.urls,
                email: bibliotecaData.email,
                ubicación: new GeoPoint(parseFloat(bibliotecaData.Latitud), parseFloat(bibliotecaData.Longitud)),
                NIT: bibliotecaData.NIT
            };
            // Llama a la acción AñadirLibrary con los datos de la biblioteca
            dispatch(AñadirLibrary(bibliotecaDataToSend));
            console.log("Envio los Datos Correctamente.. ");
        } catch (error) {
            console.error("Hubo un problema en el BibliotecaData...", error);
        }
    };

    const handleRegister = () => {
        AlmacenarDatosBiblioteca()
        navigate("/Login")
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setBibliotecaData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div>
            <Nav />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundColor: "#B8B8B8" }}>
                <img src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709768800/Open-Day/LogoBiblioNube_dbrkmt.png' style={{ opacity: "0.2", width: "50%" }} />
                <div className="hero-content flex-col lg:flex-row" style={{ justifyContent: "space-between", width: "90%" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginLeft: "8%" }}>
                        <h1 style={{ fontSize: "45px", backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width: "max-content" }} className="texTo">¡Registrate!</h1>
                        <br></br>
                        <p style={{ fontSize: "30px", backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width: "max-content", textAlign: "center" }} className="texTo2">
                            Hola <span className="resaltado2">administrador</span>, que<br></br>
                            <span className="resaltado2">gusto</span> que nos <span className="resaltado2">elijas</span> para<br></br>
                            <span className="resaltado2">centralizar</span> tu informacion<br></br>
                            de <span className="resaltado2">empresa</span>, ayudanos a <span className="resaltado2">ayudarte</span><br></br>
                            Nos <span className="resaltado2">leemos</span> luego!!<br></br>
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ backgroundColor: "rgb(255,255,255,0.5)", width: "max-content" }}>
                        <Formik>
                            {({ isSubmitting }) => (
                                <Form className='card-body'>
                                    <div className="input-row" style={{ gap: "20px" }}>
                                        <input className='inputBiblioteca'
                                            style={{ borderRadius: "10px" }}
                                            type="text"
                                            id="NombreB"
                                            value={bibliotecaData.NombreB}
                                            onChange={handleChange}
                                            placeholder='Nombre de la biblioteca'
                                        />
                                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                            <input className='inputBiblioteca'
                                                type="password"
                                                id="contra"
                                                value={bibliotecaData.contra}
                                                onChange={handleChange}
                                                placeholder='Contraseña'
                                                style={{ width: "100%", borderRadius: "10px" }}
                                            />
                                            <input className='inputBiblioteca'
                                                type="text"
                                                id="urls"
                                                value={bibliotecaData.urls}
                                                onChange={handleChange}
                                                placeholder='Url Base de Datos'
                                                style={{ width: "100%", borderRadius: "10px" }}
                                            />
                                            <div className='pdelPop' style={{ display: "flex", backgroundColor: "gray", borderRadius: "10px", padding: "5px", cursor: "pointer", position: "relative" }} onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>?</div>
                                            {showPopup && (
                                                <div className='popup2 texTo2' style={{ display: "flex", gap: "10px" }}> Si aun no tienes tu base de datos pública desplegada,
                                                    comunicate con nosotros para darte asesoria, he aqui un ejemplo de su estructura y campos necesarios para el buen funcionamiento dentro
                                                    de nuestra plataforma. en imagen se agrega un url rescatable con la imagen 'preferiblemente a color' del libro, definir por defecto
                                                    la disponibilidad en "true" mientras se tengan existencias

                                                    <img style={{ objectFit: "fill", height: "100%" }} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1710365800/Open-Day/CapturaDB_ej6ozk.png'></img>
                                                </div>
                                            )}
                                        </div>
                                        <input className='inputBiblioteca'
                                            style={{ borderRadius: "10px" }}
                                            type="email"
                                            id="email"
                                            value={bibliotecaData.email}
                                            onChange={handleChange}
                                            placeholder='Email de tu Biblioteca'

                                        />
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <input className='inputBiblioteca'
                                                type="text"
                                                id="Latitud"
                                                value={bibliotecaData.Latitud}
                                                onChange={handleChange}
                                                placeholder='Latitud de la biblioteca'
                                                style={{ width: "100%", borderRadius: "10px" }}
                                            />
                                            <input className='inputBiblioteca'
                                                type="text"
                                                id="Longitud"
                                                value={bibliotecaData.Longitud}
                                                onChange={handleChange}
                                                placeholder='Longitud de la biblioteca'
                                                style={{ width: "100%", borderRadius: "10px" }}
                                            />
                                        </div>
                                        <input className='inputBiblioteca'
                                            style={{ borderRadius: "10px" }}
                                            type="text"
                                            id="NIT"
                                            value={bibliotecaData.NIT}
                                            onChange={handleChange}
                                            placeholder='NIT de la biblioteca'

                                        />
                                    </div>
                                    <label className="infoN">
                                        <a onClick={() => navigate("/Login")} style={{}} className="label-text-alt link link-hover">Ya tienes una cuenta? <span style={{ color: "#30A69A", padding: "0" }}>Inicia sesión</span></a>
                                    </label>
                                    <button type="submit" style={{ backgroundColor: "#8E8D8E", width: "100%" }} className="btn btn-active" onClick={() => handleRegister()}>Enviar</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
