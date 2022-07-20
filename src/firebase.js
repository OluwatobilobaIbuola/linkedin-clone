import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDza3Pcnk1LvaOK_X_iNQRbS_k8pNH14XA",
    authDomain: "linkedin-d4f48.firebaseapp.com",
    projectId: "linkedin-d4f48",
    storageBucket: "linkedin-d4f48.appspot.com",
    messagingSenderId: "1047472146509",
    appId: "1:1047472146509:web:74b416bc16450077c3f404",
    measurementId: "G-2CC7KPKDSY"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);