// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myproject-5b9ea.firebaseapp.com",
  projectId: "myproject-5b9ea",
  storageBucket: "myproject-5b9ea.appspot.com",
  messagingSenderId: "1025303780439",
  appId: "1:1025303780439:web:98946d5b363e5532511712"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);