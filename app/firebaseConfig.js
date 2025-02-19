// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Czqtxro1xF84NwK0Og2l4wJJ81bAPgk",
  authDomain: "countryguesser-e8654.firebaseapp.com",
  projectId: "countryguesser-e8654",
  storageBucket: "countryguesser-e8654.firebasestorage.app",
  messagingSenderId: "255896273306",
  appId: "1:255896273306:web:f97a29902dbd7ae0a6ba23",
  measurementId: "G-CER5E2B95K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, database };
