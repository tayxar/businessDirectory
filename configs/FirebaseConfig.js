// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNUswNBSlbmTL9fNfvHDMjjejN6ogfYbg",
  authDomain: "startups-3ad41.firebaseapp.com",
  projectId: "startups-3ad41",
  storageBucket: "startups-3ad41.firebasestorage.app",
  messagingSenderId: "1008713640705",
  appId: "1:1008713640705:web:fcc238c308bdeff10b0900",
  measurementId: "G-YDG8E8PYHW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage= getStorage(app);
//const analytics = getAnalytics(app); 