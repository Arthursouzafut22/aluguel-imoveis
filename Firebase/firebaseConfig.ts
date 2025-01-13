import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjiQEjuf7GAG58nDSxFJGgOizaU9hCdgU",
  authDomain: "authentication-8791f.firebaseapp.com",
  projectId: "authentication-8791f",
  storageBucket: "authentication-8791f.firebasestorage.app",
  messagingSenderId: "656291158803",
  appId: "1:656291158803:web:39526b2403e3ef0eea58e6",
  measurementId: "G-DBYT2LRZMY",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
