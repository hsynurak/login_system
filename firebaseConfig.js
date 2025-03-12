// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore"; //Firestore üzerinden veri çekmek için import ediyoruz.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8DFt78GhQpirmGXU9Fj1IMr3XT3JpRAY",
  authDomain: "test-app-firebase-practice.firebaseapp.com",
  projectId: "test-app-firebase-practice",
  storageBucket: "test-app-firebase-practice.firebasestorage.app",
  messagingSenderId: "631337489644",
  appId: "1:631337489644:web:7eff457c1719586f9001c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app); //Firestore üzerinden veri çekmek için kullanacağımız db değişkenini oluşturuyoruz.

export default app;