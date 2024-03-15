import React, { useEffect, useState } from 'react';
import { UsuariosRegistrados, actualizarUsuario, EliminarUsuario } from '../redux/Actions/AgregarLibro';
import { useDispatch } from 'react-redux';
import '../Styles/styleProfile.css'
import { deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Nav from './Extra/Nav';
import Footer from './Extra/Footer';

export default function ProfileUser() {
    const dispatch = useDispatch();
    const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [editUsuario, setEditUsuario] = useState(null); // Estado para almacenar los cambios en el modal
    const [Nombre, setNombre] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const usuario = getAuth();

    console.log(usuario.currentUser);
    const usurio = usuario.currentUser;

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            const datosBiblioteca = await UsuariosRegistrados();
            console.log(datosBiblioteca);
            const usuario = datosBiblioteca.find(persona => persona.NewName_User === "sp@gmail.com" );
            if (usuario) {
                console.log("Usuario encontrado...");
                console.log(usuario);
                setUsuarioEncontrado(usuario);
                setEditUsuario(usuario);
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
            await actualizarUsuario(usuarioEncontrado.id, editUsuario); // Actualizar el usuario con los datos de editUsuario
            console.log("Datos del usuario actualizados correctamente.");
            // Actualizar usuarioEncontrado con los nuevos datos
            setUsuarioEncontrado(editUsuario);
            closeModalHandler(); // Cerrar el modal después de guardar
        } catch (error) {
            console.error('Error al actualizar datos del usuario:', error);
        }
    };

    const handleDeleteUser = async () => {
        if (!usuarioEncontrado) {
            console.error("No se ha encontrado ningún usuario para eliminar.");
            return;
        }
        try {
            alert(`Seguro desea eliminar el usuario ${usuarioEncontrado ? usuarioEncontrado.NewName_User : 'ninguno'}`);
            await EliminarUsuario(usuarioEncontrado.id); // Llama a la función EliminarUsuario con la ID del usuario a eliminar
            console.log("Usuario eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Nav />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundColor: "#B8B8B8" }}>
                    <img className='imgOpa' src='https://res.cloudinary.com/dtmapxnao/image/upload/v1709768800/Open-Day/LogoBiblioNube_dbrkmt.png' style={{width: "50%", opacity:"0.2" }}></img>
                <div style={{backgroundColor:"rgb(255,255,255)", padding:"20px", borderRadius:"10px", zIndex:"999" }}>
                    <div className="profile-info" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div className="profile-email">
                            <label>Correo de la Persona:</label>
                            <input type="text" className="profile-input" value={usuarioEncontrado ? usuarioEncontrado.NewName_User : 'No hay'} readOnly />
                        </div>
                        <div className="profile-password">
                            <label>Contraseña:</label>
                            <input type="password" className="profile-input" value={usuarioEncontrado ? usuarioEncontrado.Contraseña : 'No hay'} disabled />
                        </div>
                        <div className="profile-terms">
                            <label>Terminos y Condiciones:</label>
                            <input type="text" className="profile-input" value={usuarioEncontrado ? usuarioEncontrado.dataTreatment : 'No hay'} readOnly />
                        </div>
                        <div className="profile-terms">
                            <label>Imagen de Perfil</label>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                        {selectedImage && (
                            <div className="avatar">
                                <div className="w-24 rounded">
                                    <img src= {selectedImage} alt='imagen de perfil'/>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="profile-actions" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <button className="btn btn-error" onClick={handleDeleteUser}>Borrar Cuenta</button>
                        <button className="btn btn-success" onClick={openModalHandler}>Editar Cuenta</button>
                    </div>
                    {openModal && (
                        <div id="my_modal_4" className="modal" open>
                            <div className="modal-box">
                                <hr />
                                <p className="modal-message">Recuerda tener cuidado con los cambios que haces.</p>
                                <label>Correo Usuario</label>
                                <input type="email" className='modal-input' name="NewName_User" value={editUsuario ? editUsuario.NewName_User : 'No hay'} onChange={handleInputChange} />
                                <label>Nombre Usuario</label>
                                <input type="text" className='modal-input' name="Nombre" value={editUsuario ? editUsuario.Nombre : 'No hay'} onChange={handleInputChange} />
                                <label>Contraseña</label>
                                <input type="password" className='modal-input' name="Contraseña" value={editUsuario ? editUsuario.Contraseña : 'No hay'} onChange={handleInputChange} />
                                <div className="modal-action">
                                    <button className="btn btn-error" onClick={closeModalHandler} >Cerrar</button>
                                    <button className="btn btn-warning" onClick={actualizarDatosUsuario}>Guardar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
