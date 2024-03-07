import { getAuth } from "firebase/auth";
import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { typesPublications } from "../types/types";

//---------------------------------------------------------------------

export const CreateBook = (payload: object) => {
    return async (dispatch: any) => {
        const ID_Libro = getAuth()
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
            const RegisterUser = doc(dataBase, "ColeccionRegistroUser", crypto.randomUUID())
            const RegistroNuevoUsuario = {
                ...payload
            }
            await setDoc(RegisterUser, RegistroNuevoUsuario)
            dispatch(RegisterUser)
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
                console.log("Datos de la biblioteca:", ubicacionBibliotecaData);
                const datosString = JSON.stringify(ubicacionBibliotecaData);
                localStorage.setItem("Data", datosString)
                // Despachar los datos obtenidos
                dispatch(ubicacionBibliotecaData);
            } else {
                console.log("El documento no existe.");
            }
        } catch (error) {
            console.log("Error al obtener los datos de la biblioteca:", error);
        }
    }
}

export const RecuperacionUsuarioRegistrados = () => {
    return async (dispatch:any) => {
        try {
            // Consulta Firestore para obtener todos los documentos de la colección
            const querySnapshot = await getDocs(collection(dataBase, 'ColeccionRegistroUser'));

            // Iterar sobre los documentos de la colección
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                console.log(userData);
                // Si coincide, puedes despachar una acción de Redux indicando que el usuario ha iniciado sesión correctamente
            });
        } catch (error) {
            console.error('Error al recuperar información:', error);
        }
    };
};