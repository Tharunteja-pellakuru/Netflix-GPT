// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAC8qvbvqKC84S2Fk4Hzdxazqi8CrmvVw",
  authDomain: "netflixgpt-e7e89.firebaseapp.com",
  projectId: "netflixgpt-e7e89",
  storageBucket: "netflixgpt-e7e89.firebasestorage.app",
  messagingSenderId: "219064661089",
  appId: "1:219064661089:web:5b059cbc8b01f7a1bde620",
  measurementId: "G-6WQV84CM9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
