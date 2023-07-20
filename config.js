// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from 'firebase/auth';
//import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"



const firebaseConfig = {
  apiKey: "AIzaSyBJDbG-zRNRJttZuJ1Ru2M5QVS6s9wZwms",
  authDomain: "stardy-5.firebaseapp.com",
  projectId: "stardy-5",
  storageBucket: "stardy-5.appspot.com",
  messagingSenderId: "182513834230",
  appId: "1:182513834230:web:cd09e5fd17595729fa74d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const authentication = getAuth(app);


