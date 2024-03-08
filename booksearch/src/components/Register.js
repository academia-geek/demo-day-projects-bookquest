import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Atras from './Extra/Atras';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RegisterUser } from '../redux/Actions/AgregarLibro';
import { actionGoogle } from '../redux/actionsLogin';
import '../Styles/StylesLogin.css'
import Nav from './Extra/Nav';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting }) => {
        // manejar la lógica 
        console.log(values);
        setSubmitting(false);
    };

    const RegistroFrom = () => {
        navigate('/Register');
    }

    const HomeForm = () => {
        navigate('/');
    }
    return (
        <div>
            <Nav />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <p className="py-6">Escoge la opcion que más se adapte a lo que buscas</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Formik
                            // initialValues={{ username: '', password: '' }}
                            // onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className="card-body">
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-active" disabled={isSubmitting} onClick={() => HomeForm()}>Lector</button>

                                        <p className='o'>O</p>

                                        <button className="btn btn-active" onClick={() => RegistroFrom()}>Biblioteca</button>

                                        <div className="separator"></div>

                                        <button type="submit" className="btn btn-active" disabled={isSubmitting}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} onClick={() => dispatch(actionGoogle())}></img>¿Quieres Iniciar con Google?.</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

