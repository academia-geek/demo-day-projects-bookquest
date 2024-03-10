import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/StylesRegister.css'
import { actionGoogle } from '../redux/actionsLogin';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Atras from './Extra/Atras';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RegisterUser } from '../redux/Actions/AgregarLibro';

export default function Register() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const AñadirNuevoUsuario = async () => {
        try {

            console.log("Entro al Añadir...")
            const payload = {
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

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        terms: false,
        dataTreatment: false,
        google: false,
        twitter: false
    });

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
    }; return (
        <div>
            <Nav />
            <div className="container">
                <h2>Registro de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Correo Electrónico:</label>
                        <input type="email" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} required />
                        <label htmlFor="terms">Acepto los Términos y Condiciones</label>
                    </div>

                    <div className="form-group">
                        <input type="checkbox" id="data-treatment" name="dataTreatment" checked={formData.dataTreatment} onChange={handleChange} required />
                        <label htmlFor="data-treatment">Acepto el Tratamiento de Datos</label>
                    </div>

                    <div className="form-group">
                        <h4>Regístrate con:</h4>
                        <input type="checkbox" id="google" name="google" checked={formData.google} onChange={handleChange} />
                        <label htmlFor="google">Google</label>

                        <input type="checkbox" id="twitter" name="twitter" checked={formData.twitter} onChange={handleChange} />
                        <label htmlFor="twitter">Twitter</label>
                    </div>
                    <button type="submit" className="btn btn-active"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button>
                    <h1>O</h1>
                    <button className="btn btn-warning" onClick={() => AñadirNuevoUsuario()}>Registrarme!</button>
                </form>
            </div>
            <Footer />
        </div>

    )
}