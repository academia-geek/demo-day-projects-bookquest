import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionGoogle } from '../redux/actionsLogin';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RecuperacionUsuarioRegistrados } from '../redux/Actions/AgregarLibro';
import { AddUser } from '../redux/Actions/AgregarLibro'
import { getAuth } from 'firebase/auth';

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const { Tipo } = useParams();
    const encodedTipo = encodeURIComponent(Tipo);
    const dispatch = useDispatch();
    const [valueName, setValueName] = useState('');
    const [valuePass, setValuePass] = useState('');

    const handleNameChange = (event) => {
        setValueName(event.target.value);
    };

    const handlePassChange = (event) => {
        setValuePass(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        try {
            dispatch(RecuperacionUsuarioRegistrados(valueName, valuePass));
            setTimeout(() => {
                const user = getAuth();
                console.log(user);
                if (user.currentUser) {
                    navigate('/')
                }
            }, 1000)
        } catch (error) {
            console.log("Error al hacer validacion con datos...", error);
        }
    };


    const isLoginPage = location.pathname === `/Login`;
    const isLoginTipe = location.pathname === `/Login/${encodedTipo}`;
    return (
        <div>
            <Nav />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundColor: "#B8B8B8" }}>
                <img src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709768800/Open-Day/LogoBiblioNube_dbrkmt.png' style={{ opacity: "0.2", width: "50%" }} />
                <div className="hero-content flex-col lg:flex-row" style={{ justifyContent: "space-between", width: "90%" }}>
                    {isLoginTipe && (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginLeft: "8%" }}>
                            <h1 style={{ fontSize: "45px", backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width: "max-content" }} className="texTo">¡Registrate!</h1>
                            <br></br>
                            <p style={{ fontSize: "30px", backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width: "max-content", textAlign: "center" }} className="texTo2">Comienza a <span className="resaltado2">navegar</span><br></br>
                                <span>Escoge</span> la opción que <span className="resaltado2">más</span><br></br>
                                se <span className="resaltado2">adapte</span> a lo que<br></br>
                                buscas
                            </p>
                        </div>
                    )}
                    {isLoginPage && (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginLeft: "8%" }}>
                            <h1 style={{ fontSize: "45px", backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width: "max-content" }} className="texTo">¡Inicia Sesión!</h1>
                            <br></br>
                            <p style={{ fontSize: "30px", backgroundColor: "rgb(255,255,255,0.5)", padding: "10px", paddingLeft: "20px", paddingRight: "20px", borderRadius: "10px", width: "max-content", textAlign: "center" }} className="texTo2">
                                Comienza a <span className="resaltado2">navegar</span><br></br>
                                en nuestra <span className="resaltado2">nube</span> de libros,<br></br>
                                siéntete <span className="resaltado2">libre</span> de encontrar<br></br>
                                lo que <span className="resaltado2">necesitas</span> cuando<br></br>
                                lo necesitas.
                            </p>
                        </div>
                    )}
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ backgroundColor: "rgb(255,255,255,0.5)" }}>
                        {isLoginPage && (
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Correo Electronico</span>
                                    </label>
                                    <input className='inputBiblioteca'
                                        style={{ borderRadius: "10px" }}
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
                                    <input className='inputBiblioteca'
                                        style={{ borderRadius: "10px" }}
                                        type="password"
                                        placeholder="Contraseña"
                                        value={valuePass}
                                        onChange={handlePassChange}
                                    />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Olvidaste tu Contraseña?</a>
                                        <button className="btn btn-warning" style={{ padding: "10px" }} onClick={() => navigate("/Login/Tipo")}>No tienes cuenta aún?</button>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="button" className="btn btn-active" onClick={() => dispatch(actionGoogle())}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"}></img>¿Quieres Iniciar con Google?.</button><br></br>
                                    <button type="submit" className="btn btn-active">Login</button><br></br>
                                </div>
                            </form>
                        )}
                        {isLoginTipe && (
                            <div className="card-body">
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                                    <button className="btn btn-active" style={{ width: "100%" }} onClick={() => navigate("/Register")}>Lector</button>
                                    <h1>O</h1>
                                    <button className="btn btn-active" style={{ width: "100%" }} onClick={() => navigate('/Biblioteca')}>Biblioteca</button>
                                    <label className="infoN" style={{ padding: "0" }}>
                                        <a onClick={() => navigate("/Login")} style={{}} className="label-text-alt link link-hover">Ya tienes una cuenta? <span style={{ color: "#30A69A", padding: "0" }}>Inicia sesión</span></a>
                                    </label>
                                    <div style={{ borderRadius: "10px", border: "solid", borderColor: "white", borderWidth: "1px", width: "100%" }}></div>
                                    <button className="btn btn-active" ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
