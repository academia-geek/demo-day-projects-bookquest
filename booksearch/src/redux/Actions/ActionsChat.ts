import { dataBase } from "../ConfingFirebase/ConfingFirebase";
import { typesChats } from "../types/types";
import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export const actionFindChatAsync = () => {
    return async (dispatch: any) => {
        try {
            const auth = getAuth();
            if (auth && auth.currentUser) {
                const uid = auth.currentUser.uid;
                const chatQuery = query(
                    collection(dataBase, "Chat"),
                    where("UID1", "==", uid)
                );
                const chatQuery2 = query(
                    collection(dataBase, "Chat"),
                    where("UID2", "==", uid)
                );
                const chatSnapshot = await getDocs(chatQuery);
                const chatSnapshot2 = await getDocs(chatQuery2);
                if (chatSnapshot) {
                    let chats = chatSnapshot.docs.map((doc) => ({ Id: doc.id, ...doc.data() }));
                    chats = chats.concat(chatSnapshot2.docs.map((doc) => ({ Id: doc.id, ...doc.data() })));
                    dispatch(actionFindChatAsync());
                    return chats;
                } else {
                    console.warn("No se encontraron chats.");
                }
            } else {
                console.warn("No esta uthenticado");
            }
        } catch (error) {
            console.error("Error al obtener los chats:", error);
        }
    };
};
