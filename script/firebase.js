// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA523m3a5gF5vDUOR_FS0mRrbc_k4USkkw",
  authDomain: "craft-magazine.firebaseapp.com",
  projectId: "craft-magazine",
  storageBucket: "craft-magazine.firebasestorage.app",
  messagingSenderId: "1020107381198",
  appId: "1:1020107381198:web:92a6f66b8d4f1b69fb339f",
  measurementId: "G-FW70XDNZND"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };