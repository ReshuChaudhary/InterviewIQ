
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-bfab4.firebaseapp.com",
  projectId: "interviewiq-bfab4",
  storageBucket: "interviewiq-bfab4.firebasestorage.app",
  messagingSenderId: "468770559997",
  appId: "1:468770559997:web:64a5b776f4c3573714eb94"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}