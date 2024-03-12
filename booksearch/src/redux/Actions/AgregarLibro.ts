import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { DocumentData, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { typesPublications } from "../types/types";
import { Navigate } from "react-router-dom";
import { typesLogin } from "../types/types";

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
            const Register_User = doc(dataBase, "ColeccionRegistroUser", crypto.randomUUID())
            const RegistroNuevoUsuario = {
                ...payload,
            }
            await setDoc(Register_User, RegistroNuevoUsuario)
            dispatch(RegistroNuevoUsuario)
        } catch (error) {
            console.log("Error al Registrar el Usuario... ", error)
        }
    }
}
// export const RegisterUser = (payload: any) => {
//     return async (dispatch: any) => {
//         try {
//             const auth = getAuth();
//             createUserWithEmailAndPassword(auth, payload.email, payload.Contraseña)
//                 .then(async (userCredential) => {
//                     const user = userCredential.user;
//                     const Register_User = doc(dataBase, "ColeccionRegistroUser", crypto.randomUUID())
//                     const RegistroNuevoUsuario = {
//                         ...payload,
//                     }
//                     await setDoc(Register_User, RegistroNuevoUsuario)
//                     dispatch(RegistroNuevoUsuario)
//                     window.location.reload()
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     console.log("Error al Registrar el Usuario....")
//                 });

//         } catch (error) {
//             console.log("Error al Registrar el Usuario... ", error)
//         }
//     }
// }

//---------------------------------------------------------------------

// Verficacion user 
export const RecuperacionUsuarioRegistrados = (valueName: string, valuePass: string) => {
    return (dispatch: any) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, valueName, valuePass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(valueName, valueName, "Bienvenido si estas Registrado");
                dispatch(actionLoginSyn(valueName, valuePass));
            })
            .catch((error) => {
                console.warn(error, "Usuario NO Autorizado");
            });
    };
};
export const actionLoginSyn = (email: string, pass: string) => {
    return {
        type: typesLogin.login,
        payload: { email, pass },
    };
};


export const actionRegisterAsync = (valueName: string, valuePass: string) => {
    return (dispatch: any) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, valueName, valuePass)
    }
}

export const actionRegisterSync = (email: string, password: string) => {
    console.log("Usuario Agregado con existo");
    return {
        type: typesLogin.register,
        payload: { email, password },
    };
};



//Agregar Libro o biblioteca
export const AñadirLibrary = (payload: object) => {
    return async (dispatch: any) => {
        try {
            const AñadirLibro = doc(dataBase, "ColeccionBibliotecas", crypto.randomUUID())
            const PaylodaAñadirLibro = {
                ...payload
            }
            await setDoc(AñadirLibro, PaylodaAñadirLibro)
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


//Traer informacion del Firestore Usuarlios Registrados....
export const UsuariosRegistrados = async (): Promise<DocumentData[]> => {
    try {
        // Obtener referencia a la colección "ColeccionRegistroUser"
        const usuariosRegistradosCollectionRef = collection(dataBase, 'ColeccionRegistroUser');

        // Obtener todos los documentos de la colección
        const snapshot = await getDocs(usuariosRegistradosCollectionRef);

        // Inicializar un array para almacenar los datos de usuarios registrados
        const arrayUsuariosRegistrados: DocumentData[] = [];

        // Iterar sobre cada documento en el snapshot
        snapshot.forEach(doc => {
            // Obtener los datos de cada documento
            const datosUsuario = doc.data() as DocumentData;
            // Agregar los datos al array de usuarios registrados
            arrayUsuariosRegistrados.push(datosUsuario);
        });

        // Devolver el array de usuarios registrados
        return arrayUsuariosRegistrados;
    } catch (error) {
        // Manejar errores aquí
        console.error("Error al obtener usuarios registrados:", error);
        throw error;
    }
};

//Eliminar UsuarioRegistrado
export const DeleteUser_Register = async (id: string) => {
    try {
        const usuarioDocDelete = doc(dataBase, 'ColeccionRegistroUser', id);
        alert("¿Seguro que desea eliminar su cuenta?")
        await deleteDoc(usuarioDocDelete);
    } catch (error) {
        alert("Error al Eliminar el Usuario")
    }
}