import React, { useEffect, useState } from 'react';
import { UsuariosRegistrados, actualizarUsuario } from '../redux/Actions/AgregarLibro';
import { useDispatch } from 'react-redux';
import '../Styles/styleProfile.css'

export default function ProfileUser() {
    const dispatch = useDispatch();
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [editUsuario, setEditUsuario] = useState(null); // Estado para almacenar los cambios en el modal
    const [Nombre, setNombre] = useState('');


    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            const datosBiblioteca = await UsuariosRegistrados();
            console.log(datosBiblioteca);
            const usuario = datosBiblioteca.find(persona => persona.NewName_User === 'Manzana');
            if (usuario) {
                console.log("Usuario encontrado...");
                console.log(usuario);
                setUsuarioEncontrado(usuario);
                setEditUsuario(usuario); // Inicializar editUsuario con los datos del usuario encontrado
            } else {
                console.log("Usuario no encontrado");
                setUsuarioEncontrado(null);
            }
        } catch (error) {
            console.error('Error al obtener datos de la biblioteca:', error);
        }
    };

    const actualizarDatosUsuario = async () => {
        try {
            await actualizarUsuario(usuarioEncontrado.id, editUsuario ); // Actualizar el usuario con los datos de editUsuario
            console.log("Id Saliente: " , usuarioEncontrado.id);
            console.log("Datos del usuario actualizados correctamente.");
            // Actualizar usuarioEncontrado con los nuevos datos
            setUsuarioEncontrado(editUsuario);
            closeModalHandler(); // Cerrar el modal después de guardar
        } catch (error) {
            console.error('Error al actualizar datos del usuario:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Actualizar el estado de editUsuario cuando se realizan cambios en los campos de entrada del modal
        setEditUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para abrir el modal
    const openModalHandler = () => {
        setOpenModal(true);
    };

    // Función para cerrar el modal
    const closeModalHandler = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <div>
                <label>Correo de la Persona:</label>
                <input type="text" value={usuarioEncontrado ? usuarioEncontrado.NewName_User : 'No hay'} readOnly />
                <label>Contraseña:</label>
                <input type="password" value={usuarioEncontrado ? usuarioEncontrado.Contraseña : 'No hay'} disabled />
                <label>Terminos y Condiciones</label>
                <input type="text" value={usuarioEncontrado ? usuarioEncontrado.Terminos : 'No hay'} readOnly />
            </div>
            <button className="btn btn-error">Borrar Cuenta</button>
            <button className="btn btn-success" onClick={openModalHandler}>Editar Cuenta</button>
            {openModal && (
                <div id="my_modal_4" className="modal" open>
                    <div className="modal-box w-11/12 max-w-5xl">
                        <hr />
                        <p className="py-4">Recuerda tener cuidado con los cambios que haces.</p>
                        <label>Correo Usuario</label>
                        <input type="email" className='InputNODAL' name="NewName_User" value={editUsuario ? editUsuario.NewName_User : 'No hay'} onChange={handleInputChange} />
                        <label>Nombre Usuario</label>
                        <input type="text" className='InputNODAL' name="Nombre" value={editUsuario ? editUsuario.Nombre : 'No hay'} onChange={handleInputChange} />
                        <label>Contraseña</label>
                        <input type="password" className='InputNODAL' name="Contraseña" value={editUsuario ? editUsuario.Contraseña : 'No hay'} onChange={handleInputChange} />
                        <div className="modal-action">
                            <button className="btn btn-error" onClick={closeModalHandler} >Cerrar</button>
                            <button className="btn btn-warning" onClick={actualizarDatosUsuario}>Guardar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
