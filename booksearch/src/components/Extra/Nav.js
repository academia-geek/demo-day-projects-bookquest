import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecuperacionUsuarioRegistrados, actionLoginSyn } from '../../redux/Actions/AgregarLibro';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';

export default function Nav() {
    const [nombreActual, setActual] = useState('')
    const dispatch = useDispatch();
    const usuario = getAuth();
    const navigate = useNavigate();

    const LoginForm = () => {
        navigate('/Login');
    }
    const profileUser = () => {
        navigate('/ProfileUser');
    }

    console.log(usuario.currentUser);
    let verificacion = false;


    if (usuario.currentUser) {
        verificacion = true;
        const user = usuario.currentUser.email;
        // setActual(user)
    }

    let SalirLogin = false;
    const SalirCuenta = () => {
        signOut(usuario).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
        SalirLogin = false;
    }
    const AlmacenadorNombreActual = usuario.currentUser
    if (AlmacenadorNombreActual === null) {
        SalirLogin = true;
    }

    return (
        <div>
            <div className="navbar bg-base-100" style={{ backgroundColor: "rgb(72, 66, 69, 0.62)", color: "white", width: "100%" }}>
                <div className="flex-1" onClick={() => navigate("/")} style={{ gap: "20px", padding: "10px", cursor: "pointer" }}>
                    <img style={{ width: "50px" }} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709759715/Open-Day/LogoBibioteca_uyy7nf.png' alt="Imagen"></img>
                    <a className="btn btn-ghost" style={{ fontFamily: "Roboto Slab, serif", fontWeight: "bold", fontSize: "25px" }}>Book | Quest</a>
                </div>

                <ol style={{ marginRight: "50px", gap: "60px", cursor: "pointer", fontFamily: "Roboto Slab, serif", fontWeight: "bold", fontSize: "20px" }}>
                    <li onClick={() => navigate("/")}>Inicio</li>
                    <li onClick={() => navigate("/Detalles")}>Estanteria</li>
                    <li onClick={() => navigate("/Conocenos")}>Conocenos</li>
                    <li onClick={() => navigate("/Colaboradores")}>Colaboradores</li>
                </ol>
                <div className="flex-none gap-2">
                    <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" }} onClick={() => SalirCuenta()}>Salir</button>
                    {SalirLogin === true && (
                        <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" }} onClick={LoginForm}>Login</button>
                    )}
                    {verificacion === true && (
                        <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" }} onClick={profileUser}>Ir al Perfil</button>
                    )}
                </div>
            </div>
        </div>
    );
}
