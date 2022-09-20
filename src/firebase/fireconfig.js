// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKx7mxmdM7Nf3z06YIK6UqM41ti5OZ-Ho",
  authDomain: "giotecnika-a0eac.firebaseapp.com",
  projectId: "giotecnika-a0eac",
  storageBucket: "giotecnika-a0eac.appspot.com",
  messagingSenderId: "978071599781",
  appId: "1:978071599781:web:9796fa5af229ec202b2b4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)