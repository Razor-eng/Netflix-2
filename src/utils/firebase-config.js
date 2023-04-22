import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCK0ZT9HtBpmJ61ds9PoMVASDsHIFN91zY",
    authDomain: "netflix-new-9.firebaseapp.com",
    projectId: "netflix-new-9",
    storageBucket: "netflix-new-9.appspot.com",
    messagingSenderId: "404836541146",
    appId: "1:404836541146:web:ab46ca9b2b23424f32fbe3"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);