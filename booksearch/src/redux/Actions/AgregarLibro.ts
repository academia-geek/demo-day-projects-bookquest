import { getAuth } from "firebase/auth";
import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { doc, setDoc } from "firebase/firestore";
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
