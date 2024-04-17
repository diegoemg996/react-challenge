// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgVKq5j3wSioSdPTZ7nOtMWWUT-7W4ySQ",
  authDomain: "ezaudita-auth.firebaseapp.com",
  projectId: "ezaudita-auth",
  storageBucket: "ezaudita-auth.appspot.com",
  messagingSenderId: "780189737787",
  appId: "1:780189737787:web:90453fb8f0e41edefe0d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
