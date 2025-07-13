// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

  const firebaseConfig = {
  apiKey: "AIzaSyAFhoxnldPkLoi9iVOFRZUL7ve7yDGgVhw",
  authDomain: "chatapp-d3bd9.firebaseapp.com",
  projectId: "chatapp-d3bd9",
  storageBucket: "chatapp-d3bd9.firebasestorage.app",
  messagingSenderId: "1095022407580",
  appId: "1:1095022407580:web:53754c6c3066bfa9646259"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication hizmetinin referansı
export const auth = getAuth(app);

//google saglayacısının kurulumu
export const provider = new GoogleAuthProvider();

// firestore kurulum
export const db = getFirestore(app);
