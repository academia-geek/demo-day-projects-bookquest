import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { typesPublications } from "../types/types";
import { Navigate } from "react-router-dom";

//---------------------------------------------------------------------
export const CreateBook = (payload: object) => {
    return async (dispatch: any) => {
        try {
            const Create__Book = doc(dataBase, "ColeccionLibros", crypto.randomUUID());
            const NewPublication_Book = {
                ...payload
            }
            await setDoc(Create__Book, NewPublication_Book);
            dispatch(NewPublication_Book);
        } catch (error) {
            console.log("Error al Subir el Libro: ", error);
        }
    };
};

//---------------------------------------------------------------------

// Add User
export const AddUser = (payload: object) => {
    return async (dispatch: any) => {
        try {
            const AddNewUser = doc(dataBase, "ColeccionUsuarios", crypto.randomUUID());
            const PayloadNewUser = {
                ...payload
            }
            await setDoc(AddNewUser, PayloadNewUser)
            dispatch(PayloadNewUser)
            console.log("Usuario agregado Correctamente.")
        } catch (error) {
            console.log("Error al  Agregar Usuario : ", error)
        }
    }
}
//---------------------------------------------------------------------

// Add New User -Register-
export const RegisterUser = (payload: any) => {
    return async (dispatch: any) => {
        try {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, payload.email, payload.Contraseña)
                .then(async (userCredential) => { 
                    const user = userCredential.user;
                    const RegisterUser = doc(dataBase, "ColeccionRegistroUser", crypto.randomUUID())
                    const RegistroNuevoUsuario = {
                        ...payload , 
                        uid: user.uid,
                    }
                    await setDoc(RegisterUser, RegistroNuevoUsuario)
                    dispatch(RegisterUser)
                    window.location.reload()
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error al Registrar el Usuario.")
                });

        } catch (error) {
            console.log("Error al Registrar el Usuario... ", error)
        }
    }
}

//---------------------------------------------------------------------
// Library Information ---important---
export const obtenerDatosBiblioteca = () => {
    return async (dispatch: any) => {
        try {
            // Obtener la referencia al documento que deseas leer
            const ubicacionBibliotecaRef = doc(dataBase, 'ColeccionBibliotecas', 'dqqyrF5cIU1ivcE9FkAG');
            // Obtener los datos del documento
            const ubicacionBibliotecaSnap = await getDoc(ubicacionBibliotecaRef);
            // Verificar si el documento existe
            if (ubicacionBibliotecaSnap.exists()) {
                // Obtener los datos del documento
                const ubicacionBibliotecaData = ubicacionBibliotecaSnap.data();
                console.log("Datos de la biblioteca:", ubicacionBibliotecaData.ubicación);
                // Despachar los datos obtenidos 
                dispatch(ubicacionBibliotecaData);
            } else {
                console.log("El documento no existe.");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const RecuperacionUsuarioRegistrados = (valueName: string, valuePass: string) => {
    return async (dispatch: any) => {
        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, valueName, valuePass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    window.location.reload();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('Error en autenticación:')
                });
        } catch (error) {
            console.error('Error al recuperar información:', error);
        }
    };
}