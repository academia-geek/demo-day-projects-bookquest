import React, { useState } from 'react';
import '../Styles/StylesRegister.css';
import { useDispatch } from 'react-redux';
import Nav from './Extra/Nav';

export default function RegisterUsuario() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        terms: false,
        dataTreatment: false,
        google: false,
        facebook: false
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
    };

    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="image-container">
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709768800/Open-Day/LogoBiblioNube_dbrkmt.png" alt="Placeholder" />
                </div>
                <div className="form-container card">
                    <h2>Registro de Usuario</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre de Usuario:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
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
                            <div className="form-group">
                                <input type="checkbox" id="google" name="google" checked={formData.google} onChange={handleChange} />
                                <label htmlFor="google">Google</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="facebook" name="facebook" checked={formData.facebook} onChange={handleChange} />
                                <label htmlFor="facebook">Facebook</label>
                            </div>
                        </div>

                        <button type="submit" className="register-btn">Registrarme!</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
