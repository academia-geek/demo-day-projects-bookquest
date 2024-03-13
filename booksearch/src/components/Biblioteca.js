import React, { useState } from 'react';
import '../Styles/StylosLoginBiblioteca.css'
import { useNavigate } from 'react-router-dom';
import { AñadirLibrary } from '../redux/Actions/AgregarLibro'
import { useDispatch } from 'react-redux';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { Formik, Form, Field } from 'formik';


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
            <Nav />
            <div className="hero min-h-screen bg-base-200" style={{backgroundColor:"#B8B8B8"}}>
                <img src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709768800/Open-Day/LogoBiblioNube_dbrkmt.png' style={{opacity:"0.2", width:"50%"}}/>
                <div className="hero-content flex-col lg:flex-row" style={{justifyContent:"space-between", width:"90%"}}>
                    <div style={{display:"flex" ,alignItems:"center", justifyContent:"center", flexDirection:"column", marginLeft:"8%"}}>
                        <h1 style={{fontSize:"45px" ,backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width:"max-content"}} className="texTo">¡Registrate!</h1>
                        <br></br>
                        <p style={{fontSize:"30px" ,backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width:"max-content", textAlign:"center"}} className="texTo2">
                            Hola <span className="resaltado2">administrador</span>, que<br></br>
                            <span className="resaltado2">gusto</span> que nos <span className="resaltado2">elijas</span> para<br></br>
                            <span className="resaltado2">centralizar</span> tu informacion<br></br>
                            de <span className="resaltado2">empresa</span>, ayudanos a <span className="resaltado2">ayudarte</span><br></br>
                            Nos <span className="resaltado2">leemos</span> luego!!<br></br>
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{backgroundColor:"rgb(255,255,255,0.5)", width:"max-content"}}>
                        <Formik>
                            {({ isSubmitting }) => (
                                <Form className='card-body'>
                                    <div className="input-row" style={{gap:"20px"}}>
                                        <input className='inputBiblioteca'
                                            style={{borderRadius:"10px"}}
                                            type="text"
                                            id="name"
                                            value={bibliotecaData.name}
                                            onChange={handleChange}
                                            placeholder='Nombre de la biblioteca'
                                        />
                                        <div style={{display:"flex", gap:"10px"}}>
                                            <input className='inputBiblioteca'
                                                type="text"
                                                id="isbn"
                                                value={bibliotecaData.isbn}
                                                onChange={handleChange}
                                                placeholder='Nit de la biblioteca'
                                                style={{width:"100%", borderRadius:"10px"}}
                                            />
                                            <input className='inputBiblioteca'
                                                type="text"
                                                id="api"
                                                value={bibliotecaData.api}
                                                onChange={handleChange}
                                                placeholder='API de tu Bilbioteca'
                                                style={{width:"100%", borderRadius:"10px"}}
                                            />
                                        </div>
                                        <input className='inputBiblioteca'
                                            style={{borderRadius:"10px"}}
                                            type="email"
                                            id="email"
                                            value={bibliotecaData.email}
                                            onChange={handleChange}
                                            placeholder='Email de tu Biblioteca'
                                
                                        />
                                        <div style={{display:"flex", gap:"10px"}}>
                                            <input className='inputBiblioteca'
                                                type="text"
                                                id="latitude"
                                                value={bibliotecaData.latitude}
                                                onChange={handleChange}
                                                placeholder='Latitud de la biblioteca'
                                                style={{width:"100%", borderRadius:"10px"}}
                                            />
                                            <input className='inputBiblioteca'
                                                type="text"
                                                id="longitude"
                                                value={bibliotecaData.longitude}
                                                onChange={handleChange}
                                                placeholder='Longitud de la biblioteca'
                                                style={{width:"100%", borderRadius:"10px"}}
                                            />
                                        </div>
                                        <input className='inputBiblioteca'
                                        style={{borderRadius:"10px"}}
                                            type="text"
                                            id="nit"
                                            value={bibliotecaData.nit}
                                            onChange={handleChange}
                                            placeholder='NIT de la biblioteca'
                                
                                        />
                                    </div>
                                        <label className="infoN">
                                            <a onClick={()=>navigate("/Login")} style={{}} className="label-text-alt link link-hover">Ya tienes una cuenta?</a>
                                        </label>
                                    <button type="submit" style={{backgroundColor:"#8E8D8E"}} className='btnEnviarLibrary' onClick={AlmacenarDatosBiblioteca}>Enviar</button>
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

//    return (
//        <div>
//            <div className='content-form'>
//                <form className='formBiblioteca'>
//                    <div className="input-row">
//                        <input className='inputBiblioteca'
//                            type="text"
//                            id="name"
//                            value={bibliotecaData.name}
//                            onChange={handleChange}
//                            placeholder='Nombre de la biblioteca'
//                        />
//                        <input className='inputBiblioteca'
//                            type="text"
//                            id="isbn"
//                            value={bibliotecaData.isbn}
//                            onChange={handleChange}
//                            placeholder='Nit de la biblioteca'
//                        />
//                        <input className='inputBiblioteca'
//                            type="text"
//                            id="api"
//                            value={bibliotecaData.api}
//                            onChange={handleChange}
//                            placeholder='API de tu Bilbioteca'
//
//                        />
//                        <input className='inputBiblioteca'
//                            type="email"
//                            id="email"
//                            value={bibliotecaData.email}
//                            onChange={handleChange}
//                            placeholder='Email de tu Biblioteca'
//
//                        />
//                        <input className='inputBiblioteca'
//                            type="text"
//                            id="latitude"
//                            value={bibliotecaData.latitude}
//                            onChange={handleChange}
//                            placeholder='Latitud de la biblioteca'
//                        />
//                        <input className='inputBiblioteca'
//                            type="text"
//                            id="longitude"
//                            value={bibliotecaData.longitude}
//                            onChange={handleChange}
//                            placeholder='Longitud de la biblioteca'
//
//                        />
//                        <input className='inputBiblioteca'
//                            type="number"
//                            id="nit"
//                            value={bibliotecaData.nit}
//                            onChange={handleChange}
//                            placeholder='NIT de la biblioteca'
//
//                        />
//                    </div>
//                    <button type="submit" className='btnEnviarLibrary' onClick={AlmacenarDatosBiblioteca}>Enviar</button>
//                </form>
//            </div>
//        </div>
//    );
//}