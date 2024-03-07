import { getAuth } from "firebase/auth";
import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { typesPublications } from "../types/types";


export const CreateBook = (payload: object) => {
    return async (dispatch:any) => {
        const ID_Libro = getAuth()
        try {
            const Create__Book = doc(dataBase, "ColeccionLibros" , crypto.randomUUID());
            const NewPublication_Book = {
                ...payload
            }
            await setDoc(Create__Book, NewPublication_Book);
            dispatch( NewPublication_Book);
        }catch (error) {
            console.log("Error al Subir el Libro: " , error);
        }
    };
};

// Library Information ---important--- 
export const obtenerDatosBiblioteca = () => {
    return async (dispatch:any) => {
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
                localStorage.setItem("Data" , datosString )
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