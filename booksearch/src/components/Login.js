import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">¡Inicia Sesión!</h1>
                    <p className="py-6" >Explora, Descubre, Sumérgete en un Mar de Conocimiento en la Biblioteca Digital.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nombre de Usuario</span>
                            </label>
                            <input type="text" placeholder="Nombre de Usuario" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contraseña</span>
                            </label>
                            <input type="password" placeholder="Contraseña" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Olvidates tu Contraseña?</a>
                                <a href="#" className="label-text-alt link link-hover">No tienes cuenta aún?</a>
                            </label>
                            
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-active" onClick={() => navigate('/Register')}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}
