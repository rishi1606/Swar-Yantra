// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOvvkMEAOn-G4fiEO10ZFNIB-GVEMluSk",
  authDomain: "chat-app-b9b2a.firebaseapp.com",
  projectId: "chat-app-b9b2a",
  storageBucket: "chat-app-b9b2a.appspot.com",
  messagingSenderId: "220715960992",
  appId: "1:220715960992:web:f46e8582cc3db4781f97c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;