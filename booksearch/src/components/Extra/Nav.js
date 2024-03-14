import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';

export default function Nav() {
    const [usuarioActual, setUsuarioActual] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const usuario = getAuth().currentUser;
        if (usuario) {
            setUsuarioActual(usuario);
            setIsLoggedIn(true);
        } else {
            setUsuarioActual(null);
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        signOut(getAuth())
            .then(() => {
                // Sign-out successful.
                setUsuarioActual(null);
                setIsLoggedIn(false);
            })
            .catch((error) => {
                // An error happened.
                console.error('Error while logging out:', error);
            });
    };

    const handleLogin = () => {
        navigate('/Login');
    };

    const handleProfile = () => {
        navigate('/ProfileUser');
    };

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
                    <li onClick={() => navigate("/Colaboradores")}>Colaboladores</li>

                </ol>
                <div className="flex-none gap-2">
                    {isLoggedIn && (
                        <>
                            <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" }} onClick={handleLogout}>Salir</button>
                            <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" }} onClick={handleProfile}>Ir al Perfil</button>
                        </>
                    )}
                    {!isLoggedIn && (
                        <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" }} onClick={handleLogin}>Login</button>
                    )}
                </div>
            </div>
        </div>
    );
}
