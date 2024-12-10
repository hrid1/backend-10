// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_BrKi4T3xW5SvRtq_XCAj3p6_y_ORi_E",
  authDomain: "coffee-store-c3cca.firebaseapp.com",
  projectId: "coffee-store-c3cca",
  storageBucket: "coffee-store-c3cca.firebasestorage.app",
  messagingSenderId: "567168847967",
  appId: "1:567168847967:web:86adbbd0f7d59b82724bea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
