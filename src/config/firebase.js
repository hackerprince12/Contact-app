// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCAgzJ4Xzz5hAVjtuUtObZZw1z3d10vEQ",
  authDomain: "vite-contact-cc561.firebaseapp.com",
  projectId: "vite-contact-cc561",
  storageBucket: "vite-contact-cc561.appspot.com",
  messagingSenderId: "47709513758",
  appId: "1:47709513758:web:79ca05ec524c544bf8e60f",
  measurementId: "G-0P540JHXVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
