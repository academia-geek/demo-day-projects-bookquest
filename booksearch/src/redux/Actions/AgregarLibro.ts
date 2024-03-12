import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { DocumentData, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
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
                        ...payload,
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

// Verficacion user 
export const RecuperacionUsuarioRegistrados = (valueName: string, valuePass: string) => {
    return async (dispatch: any) => {
        try {
            const auth = getAuth();
            let autenti = false;
            console.log(autenti);
            signInWithEmailAndPassword(auth, valueName, valuePass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    autenti = true;
                    console.log(autenti);
                    sessionStorage.setItem("booleanAutentication", autenti.toString());
                    sessionStorage.setItem("nameUserSesion", valueName.toString());
                    console.log(valueName.toString());
                    window.location.reload();
                    window.location.href = "/"
                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('Error en autenticación:');
                    window.location.reload();
                });
        } catch (error) {
            console.error('Error al recuperar información:', error);
        }
    };
}


//Agregar Libro o biblioteca
export const AñadirLibrary = (payload: object) => {
    return async (dispatch: any) => {
        try {
            const AñadirLibro = doc(dataBase , "ColeccionBibliotecas" , crypto.randomUUID())
            const PaylodaAñadirLibro = {
                ...payload
            }
            await setDoc(AñadirLibro , PaylodaAñadirLibro)
            dispatch(PaylodaAñadirLibro)
            console.error("Biblioteca almacenada Correctamente...");
        } catch (error) {
            console.error("Error al Añadir Biblioteca...")
        }
    }
}


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

// Library Information ---important---
export const obtenerDatosBiblioteca = async (): Promise<DocumentData[]> => {
    try {
        // Obtener la referencia a la colección
        const bibliotecasCollectionRef = collection(dataBase, 'ColeccionBibliotecas');
        // Obtener todos los documentos de la colección
        const snapshot = await getDocs(bibliotecasCollectionRef);

        const bibliotecas: DocumentData[] = [];
        snapshot.forEach(doc => {
            // Obtener los datos de cada documento
            const bibliotecaData = doc.data();
            // Agregar los datos al array de bibliotecas
            bibliotecas.push(bibliotecaData);
        });

        // Devolver el array de bibliotecas
        return bibliotecas;
    } catch (error) {
        console.error("Error al obtener datos de la colección:", error);
        throw error;
    }
};

