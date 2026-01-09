import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1M4IpogFe9qg6j7Fb0nCiaczSc7gV98A",
  authDomain: "gestion-proyectos-react-df590.firebaseapp.com",
  projectId: "gestion-proyectos-react-df590",
  storageBucket: "gestion-proyectos-react-df590.firebasestorage.app",
  messagingSenderId: "221157643574",
  appId: "1:221157643574:web:31a5fab016fe4d87bf0f97",
  measurementId: "G-ST552NMYBS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
