import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();
    const LoginForm = () => {
        navigate('/Login');
    }

    const profileUSer = () => {
        navigate('/ProfileUser');
    }
    let autentiString = sessionStorage.getItem("booleanAutentication");
    let NameUserActual = sessionStorage.getItem("nameUserSesion");
    if (autentiString === null) {
        autentiString = false;
    }
    console.log("Autenticacion User: ", autentiString);
    console.log(NameUserActual);

    return (
        <div>
            <div className="navbar bg-base-100" style={{ backgroundColor: "rgb(72, 66, 69, 0.62)", color: "white", width: "100%" }}>
                <div className="flex-1" style={{ gap: "20px", padding: "10px" }}>
                    <img style={{ width: "50px" }} src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709759715/Open-Day/LogoBibioteca_uyy7nf.png' alt="Imagen"></img>
                    <a className="btn btn-ghost text-xl">Book | Quest</a>
                </div>

                <ol style={{ marginRight: "50px", gap: "60px", cursor: "pointer", fontweight: "bold" }}>
                    <li onClick={() => navigate("/")}>Inicio</li>
                    <li onClick={() => navigate("/Detalles")}>Estanteria</li>
                    <li onClick={() => navigate("/Conocenos")}>Conocenos</li>
                    <li onClick={() => navigate()}>Colaboladores</li>
                </ol>
                <div className="flex-none gap-2">
                    {autentiString === false && (
                        <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" }} onClick={LoginForm}>Login/Register</button>
                    )}
                    {NameUserActual && (
                        <button style={{ background: "white", color: "black", padding: "10px", borderRadius: "12px", width: "100%" , marginRight: "20px" }} onClick={profileUSer}>{NameUserActual}</button>
                    )}
                </div>
            </div>
        </div>
    );
}
