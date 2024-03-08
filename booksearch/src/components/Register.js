import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
// import { useNavigate } from 'react-router-dom';
import Atras from './Extra/Atras';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';
import { RegisterUser } from '../redux/Actions/AgregarLibro';
=======
import { actionGoogle } from '../redux/actionsLogin';
import '../Styles/StylesLogin.css'
import Nav from './Extra/Nav';
>>>>>>> b15eeb25b46d57e4a92d8883af6a6aef4d367cb9

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

<<<<<<< HEAD
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
            console.log("Error al Registrar el usuario mandando los Datos..." , error)
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
=======
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
>>>>>>> b15eeb25b46d57e4a92d8883af6a6aef4d367cb9
}

