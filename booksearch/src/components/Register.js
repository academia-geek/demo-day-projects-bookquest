import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/StylesRegister.css'
import { actionGoogle } from '../redux/actionsLogin';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Atras from './Extra/Atras';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RegisterUser } from '../redux/Actions/AgregarLibro';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        terms: false,
        dataTreatment: false,
        google: false,
        twitter: false
    });

    const AñadirNuevoUsuario = async () => {
        try {
            console.log("Entro al Añadir...")
            const payload = {
                id: Math.floor(Math.random() * Date.now()).toString(16),
                NewName_User: formData.name,
                Contraseña: formData.password,
                ContraseñaTwo: formData.password,
                email: formData.email,
                terms: formData.terms,
                dataTreatment: formData.dataTreatment,
                google: formData.google,
                twitter: formData.twitter
            }
            dispatch(RegisterUser(payload))
            alert("Usuario Registrado.")
        } catch (error) {
            console.log("Error al Registrar el usuario mandando los Datos...", error)
        }
    }



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // enviar los datos a backend
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
                            Hola <span className="resaltado2">lector</span>, es un gusto que nos<br></br>
                            acompañes, <span className="resaltado2">esperamos</span> que<br></br>
                            tu experiencia sea <span className="resaltado2">increíble</span><br></br>
                            en <span className="resaltado2">nuestra</span> plataforma.<br></br>
                            Nos <span className="resaltado2">leemos</span> luego!!
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{backgroundColor:"rgb(255,255,255,0.5)"}}>
                        <Formik>
                            {({ isSubmitting }) => (
                                <Form onSubmit={handleSubmit} className="card-body">
                                    <div className="form-group">
                                        <label className="label">
                                            <span className="label-text">Correo Electronico</span>
                                        </label>
                                        <input type="email" id="name" name="name" className='inputBiblioteca' style={{width:"100%", borderRadius:"10px"}} value={formData.name} onChange={handleChange} required placeholder="Correo Electronico"/>
                                    </div>
                
                                    <div className="form-group">
                                        <label className="label">
                                            <span className="label-text">Contraseña</span>
                                        </label>
                                        <input type="password" id="password" name="password" className='inputBiblioteca' style={{width:"100%", borderRadius:"10px"}} value={formData.password} onChange={handleChange} required placeholder="Contraseña"/>
                                    </div>

                                    <div>
                                        <div className="form-group" style={{display:"flex"}}>
                                        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} required />
                                        <label htmlFor="terms">Acepto los Términos y Condiciones</label>
                                        </div>
                
                                        <div className="form-group" style={{display:"flex"}}>
                                            <input type="checkbox" id="data-treatment" name="dataTreatment" checked={formData.dataTreatment} onChange={handleChange} required />
                                            <label htmlFor="data-treatment">Acepto el Tratamiento de Datos</label>
                                        </div>
                                    </div>

                                    <label className="infoN" style={{padding:"0"}}>
                                            <a onClick={()=>navigate("/Login")} style={{}} className="label-text-alt link link-hover">Ya tienes una cuenta?</a>
                                    </label>
                                    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <button type="submit" className="btn btn-active"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button>
                                        <h1>O</h1>
                                        <button className="btn btn-warning" style={{width:"100%"}} onClick={() => AñadirNuevoUsuario()}>Registrarme!</button>
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
    
//    return (
//        <div>
//            <Nav />
//            <div className="container">
//                <h2>Registro de Usuario</h2>
//                <form onSubmit={handleSubmit}>
//                    <div className="form-group">
//                        <label htmlFor="name">Correo Electrónico:</label>
//                        <input type="email" id="name" name="name" value={formData.name} onChange={handleChange} required />
//                    </div>
//
//                    <div className="form-group">
//                        <label htmlFor="password">Contraseña:</label>
//                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
//                    </div>
//
//                    <div className="form-group">
//                        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} required />
//                        <label htmlFor="terms">Acepto los Términos y Condiciones</label>
//                    </div>
//
//                    <div className="form-group">
//                        <input type="checkbox" id="data-treatment" name="dataTreatment" checked={formData.dataTreatment} onChange={handleChange} required />
//                        <label htmlFor="data-treatment">Acepto el Tratamiento de Datos</label>
//                    </div>
//
//                    <div className="form-group">
//                        <h4>Regístrate con:</h4>
//                        <input type="checkbox" id="google" name="google" checked={formData.google} onChange={handleChange} />
//                        <label htmlFor="google">Google</label>
//
//                        <input type="checkbox" id="twitter" name="twitter" checked={formData.twitter} onChange={handleChange} />
//                        <label htmlFor="twitter">Twitter</label>
//                    </div>
//                    <button type="submit" className="btn btn-active"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button>
//                    <h1>O</h1>
//                    <button className="btn btn-warning" onClick={() => AñadirNuevoUsuario()}>Registrarme!</button>
//                </form>
//            </div>
//            <Footer />
//        </div>
//
//    )
//}