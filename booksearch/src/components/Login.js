import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { actionGoogle } from '../redux/actionsLogin';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RecuperacionUsuarioRegistrados } from '../redux/Actions/AgregarLibro';
import { AddUser } from '../redux/Actions/AgregarLibro'

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [valueName, setValueName] = useState('');
    const [valuePass, setValuePass] = useState('');
    const handleNameChange = (event) => {
        setValueName(event.target.value);
    };

    const handlePassChange = (event) => {
        setValuePass(event.target.value);
    };
    // const GuardarUserAdd = async (valueName, valuePass) => {
    //     if (!valueName.trim() || !valuePass.trim()) {
    //         alert("Por favor, complete todos los campos.");
    //         window.location.reload(); // Recarga la página
    //         return;
    //     }
    //     try {
    //         console.log("Entering GuardarUser...");
    //         const AddUser_Login = {
    //             uid: crypto.randomUUID(),
    //             NombreUser: "Sebastian Perez",
    //             Contraseña: "10221324343"
    //         }
    //         dispatch(AddUser(AddUser_Login))
    //         console.log("Datos Add!")
    //     } catch (error) {
    //         console.log("Error al guardar el Login...", error);
    //     }
    // }

    const handleLogin = async () => {
        try {
            // Llama a la acción para recuperar los datos del usuario
            await dispatch(RecuperacionUsuarioRegistrados(valueName, valuePass));
            console.log(valueName, valuePass);
            // Llama a GuardarUserAdd después de iniciar sesión exitosamente
        } catch (error) {
            console.log("Error al hacer validacion con datos...", error);
        }
    };

    const RegistroForm = () => {
        navigate('/Register');  
    }
    // //
    // dispatch(actionLoginAsyn(valueName, valuePass));
    // reset();

    return (
        <div>
            <Nav />
            <div className="hero min-h-screen bg-base-200" style={{backgroundColor:"#B8B8B8"}}>
                <img src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709768800/Open-Day/LogoBiblioNube_dbrkmt.png' style={{opacity:"0.2", width:"50%"}}/>
                <div className="hero-content flex-col lg:flex-row" style={{justifyContent:"space-between", width:"90%"}}>
                    <div style={{display:"flex" ,alignItems:"center", justifyContent:"center", flexDirection:"column", marginLeft:"8%"}}>
                        <h1 style={{fontSize:"45px" ,backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width:"max-content"}} className="texTo">¡Inicia Sesión!</h1>
                        <br></br>
                        <p style={{fontSize:"30px" ,backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width:"max-content", textAlign:"center"}} className="texTo2">Comienza a <span className="resaltado2">navegar</span><br></br>
                            en nuestra <span className="resaltado2">nube</span> de libros,<br></br>
                            siéntete <span className="resaltado2">libre</span> de encontrar<br></br>
                            lo que <span className="resaltado2">necesitas</span> cuando<br></br>
                            lo necesitas.
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{backgroundColor:"rgb(255,255,255,0.5)"}}>
                        <Formik
                            initialValues={{ username: '', password: '' }} // Agregar el objeto initialValues
                        >
                            {({ isSubmitting }) => (
                                <Form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Correo Electronico</span>
                                        </label>
                                        <input
                                            style={{borderRadius:"10px", paddingLeft:"2px"}}
                                            type="text"
                                            placeholder="Correo Electronico"
                                            value={valueName}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Contraseña</span>
                                        </label>
                                        <input
                                            style={{borderRadius:"10px", paddingLeft:"2px"}}
                                            type="password"
                                            placeholder="Contraseña"
                                            value={valuePass}
                                            onChange={handlePassChange}
                                        />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Olvidaste tu Contraseña?</a>
                                            <button className="btn btn-warning" style={{padding:"10px"}} onClick={() => RegistroForm()}>No tienes cuenta aún?</button>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-active" disabled={isSubmitting}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button><br></br>
                                        <button type="submit" className="btn btn-active" disabled={isSubmitting} onClick={() => handleLogin()}>Login</button><br></br>
                                        <button type="submit" className="btn btn-active" disabled={isSubmitting} onClick={() => navigate('/Biblioteca')}>Biblioteca</button><br></br>
                                    </div>
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
