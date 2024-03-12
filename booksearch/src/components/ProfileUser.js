import React, { useEffect, useState } from 'react';
import { UsuariosRegistrados } from '../redux/Actions/AgregarLibro';
import { actionDeletePublicationAsync } from '../redux/Actions/AgregarLibro';
import { useDispatch } from 'react-redux';

export default function ProfileUser() {
    const dispatch = useDispatch();
    const [nombrePersona, setNombrePersona] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [termsCondition, setCondition] = useState('');
    const [idUsuario, setIdUsuario] = useState('');

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            const datosBiblioteca = await UsuariosRegistrados();
            const usuarioEncontrado = datosBiblioteca.find(persona => persona.NewName_User === "perez@gmail.com");
            if (usuarioEncontrado) {
                setIdUsuario(usuarioEncontrado.id);
                setNombrePersona(usuarioEncontrado.NewName_User);
                setContraseña(usuarioEncontrado.Contraseña);
                setCondition(usuarioEncontrado.terms);
            }
        } catch (error) {
            console.error('Error al obtener datos de la biblioteca:', error);
        }
    };

    const delatePublication = async () => {
        try {
            await dispatch(actionDeletePublicationAsync(idUsuario));
            console.log('Publicación eliminada correctamente');
        } catch (error) {
            console.error('Error al eliminar la publicación:', error);
        }
    };

    return (
        <div>
            <div>
                <label>Correo de la Persona:</label>
                <input type="text" value={nombrePersona} readOnly />
                <label>Contraseña:</label>
                <input type="password" value={contraseña} readOnly />
                <label>Terminos y Condiciones</label>
                <input type="text" value={termsCondition} readOnly />
            </div>
            <button className="btn btn-error" onClick={delatePublication}>Borrar Cuenta</button>
            <button className="btn btn-success">Editar Cuenta</button>
        </div>
    )
}
