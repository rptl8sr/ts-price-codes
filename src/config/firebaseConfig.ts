import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBnyPhIXM4MxI6VZp6WYjaoPVg_D6rO8zw",
  authDomain: "ts-price-codes.firebaseapp.com",
  projectId: "ts-price-codes",
  storageBucket: "ts-price-codes.appspot.com",
  messagingSenderId: "1017966642044",
  appId: "1:1017966642044:web:f476f34b2731f30b4e5af9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);