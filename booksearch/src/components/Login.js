import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { actionGoogle } from '../redux/actionsLogin';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RecuperacionUsuarioRegistrados } from '../redux/Actions/AgregarLibro';
import {AddUser} from '../redux/Actions/AgregarLibro'

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [valueName, setValueName] = useState('');
    const [valuePass, setValuePass] = useState('');
        const [modalOpen, setModalOpen] = useState(false);


    const handleNameChange = (event) => {
        setValueName(event.target.value);
    };

    const handlePassChange = (event) => {
        setValuePass(event.target.value);
    };

    const GuardarUserAdd = async (valueName,valuePass) => {
        if (!valueName.trim() || !valuePass.trim()) {
            alert("Por favor, complete todos los campos.");
            window.location.reload(); // Recarga la página
            return;
        }
        try {
            console.log("Entering GuardarUser...");
            const AddUser_Login = {
                uid: crypto.randomUUID(),
                NombreUser: "Sebastian Perez",
                Contraseña: "10221324343"
            }
            dispatch(AddUser(AddUser_Login))
            console.log("Datos Add!")
        } catch (error) {
            console.log("Error al guardar el Login...", error);
        }
    }

    const handleLogin = async () => {
        try {
            // Llama a la acción para recuperar los datos del usuario
            await dispatch(RecuperacionUsuarioRegistrados(valueName, valuePass));
            // Llama a GuardarUserAdd después de iniciar sesión exitosamente
            GuardarUserAdd(valueName, valuePass);
        } catch (error) {
            console.log("Error al hacer validacion con datos...", error);
        }
    };

    const RegistroForm = () => {
        navigate('/Register');
    }

    return (
        <div>
            <Nav />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">¡Inicia Sesión!</h1>
                        <p className="py-6">Explora, Descubre, Sumérgete en un Mar de Conocimiento en la Biblioteca Digital.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Formik
                            initialValues={{ username: '', password: '' }} // Agregar el objeto initialValues
                        >
                            {({ isSubmitting }) => (
                                <Form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Nombre de Usuario</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Nombre de Usuario"
                                            value={valueName}
                                            onChange={handleNameChange}
                                        />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Contraseña</span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Contraseña"
                                            value={valuePass}
                                            onChange={handlePassChange}
                                        />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Olvidaste tu Contraseña?</a>
                                            <button className="btn btn-warning" onClick={() => RegistroForm()}>No tienes cuenta aún?</button>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">

                                        <button type="submit" className="btn btn-active" disabled={isSubmitting}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button><br></br>
                                        <button type="submit" className="btn btn-active" disabled={isSubmitting} onClick={() => handleLogin()}>Login</button><br></br>
                                        <button type="submit" className="btn btn-active" disabled={isSubmitting}>Biblioteca</button><br></br>
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
