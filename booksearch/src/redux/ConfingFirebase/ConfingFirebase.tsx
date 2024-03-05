import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWrVH_NtAU01U5-ZTKBOT2dcQ_SxHiR8k",
    authDomain: "bookqueest.firebaseapp.com",
    projectId: "bookqueest",
    storageBucket: "bookqueest.appspot.com",
    messagingSenderId: "862231750467",
    appId: "1:862231750467:web:de8bb34ae07fbad68af1f6",
    measurementId: "G-QGETJCLSWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const dataBase = getFirestore(app);