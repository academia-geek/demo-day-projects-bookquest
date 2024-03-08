import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AutenticacionAdmin() {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function CrudLoginTrue() {
        navigate('/CrudAdminBook')
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl">Administrador "Biblioteca La buena Esperanza"</h1>
                        <p className="mb-5">Tienes que Iniciar Sesion con tu cuenta de Biblioteca o de Administrador. Para que puedas Ingresar.</p>
                        <button className="btn btn-primary" onClick={openModal}>¡Iniciar como Administrador!</button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <dialog id="my_modal_4" className="modal" open>
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">¡Hola Administrador!</h3>
                        <hr></hr>
                        <p className="py-4">Debes de Iniciar Sesion. ¡Muchas Gracias!</p>
                        <label>Usuario</label>
                        <input type="text" className='InputNODAL' ></input>
                        <label>Contraseña </label>
                        <input type="text" className='InputNODAL' ></input>
                        <div className="modal-action">
                            <button className="btn btn-error" onClick={closeModal}>Cerrar</button>
                            <button className="btn btn-warning" onClick={CrudLoginTrue}>Iniciar</button>
                            <button type="submit" className="btn btn-active"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png' alt='' width={"80px"} ></img>¿Quieres Iniciar con Google?.</button>
                            <button className="btn btn-warning" onClick={CrudLoginTrue}>Iniciar</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    )
}
