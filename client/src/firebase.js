// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AP_KEY,
  authDomain: "mern-real-estate-1eb38.firebaseapp.com",
  projectId: "mern-real-estate-1eb38",
  storageBucket: "mern-real-estate-1eb38.appspot.com",
  messagingSenderId: "436431357735",
  appId: "1:436431357735:web:76ecf939008b2543648b02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);