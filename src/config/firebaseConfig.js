import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmDGDu7ICHj9YAzEWWisva5BXYYlbkdO8",
  authDomain: "budgeting-app-89850.firebaseapp.com",
  projectId: "budgeting-app-89850",
  storageBucket: "budgeting-app-89850.firebasestorage.app",
  messagingSenderId: "55624540371",
  appId: "1:55624540371:web:9f293fe39a1174ecdd7426",
  measurementId: "G-KGD6CYRRS6"
};

// Αρχικοποίηση Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
