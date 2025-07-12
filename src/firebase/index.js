// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWUad4LMdd8jl9vYf73FdeFQZ-4TgF5zo",
  authDomain: "chatapp-45f5e.firebaseapp.com",
  projectId: "chatapp-45f5e",
  storageBucket: "chatapp-45f5e.firebasestorage.app",
  messagingSenderId: "578342023471",
  appId: "1:578342023471:web:22d161a1af5aba91e071da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication hizmetinin referansı
export const auth = getAuth(app);

//google saglayacısının kurulumu
export const provider = new GoogleAuthProvider();

// firestore kurulum
export const db = getFirestore(app);
