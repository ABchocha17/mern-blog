// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: "mearn-blog.firebaseapp.com",
  projectId: "mearn-blog",
  storageBucket: "mearn-blog.appspot.com",
  messagingSenderId: "394093675546",
  appId: "1:394093675546:web:25a57d915e8c62acdf7da3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);