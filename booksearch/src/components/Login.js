import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { actionGoogle } from '../redux/actionsLogin';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RecuperacionUsuarioRegistrados } from '../redux/Actions/AgregarLibro';
import '../Styles/StylesLogin.css'


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const AddUser_Firestore = async () => {
    //     try {
    //         console.log("Se estan enviando los Datos.")
    //         const payload = {
    //             NombreUser: "PRUEBA FIRESTORE 1",
    //             Contraseña: "PRUEBA FIRESTORE 1",
    //             Contraseña2: "PRUEBA FIRESTORE 1"
    //         }
    //         dispatch(AddUser(payload))
    //     } catch (error) {

    //     }
    // }

const DisplayDatos = async () => {
    const dispatch = useDispatch();

    try {
        // Llama a la acción y espera a que se complete
        await dispatch(RecuperacionUsuarioRegistrados());
    } catch (error) {
        console.error('Error al mostrar datos:', error);
    }
}


    const RegistroFrom = () => {
        navigate('/Register');
    }

    return (
        <div>
            <Nav />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">¡Inicia Sesión!</h1>
                        <p className="py-6">Ingresa y comienza a navegar en nuestra nube de libros, siéntete libre de encontrar lo que necesitas, cuando lo necesitas.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            // onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Nombre de Usuario</span>
                                        </label>
                                        <Field type="text" name="username" placeholder="Nombre de Usuario" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Contraseña</span>
                                        </label>
                                        <Field type="password" name="password" placeholder="Contraseña" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">¿Olvidaste tu Contraseña?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-active" disabled={isSubmitting} >Login</button>
                                        {/* onClick={() => HomeForm()} */}
                                        <p className='o'>O</p>

                                        <button className="btn btn-active" onClick={() => RegistroFrom()}>Register</button>

                                        <div className="separator"></div>

                                        <button type="submit" className="btn btn-active" disabled={isSubmitting}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button>
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
