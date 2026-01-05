// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQlTcmR-3SwjSaEYAwR86kWU2M7sOSUzs",
  authDomain: "mulmed-proyek-akhir.firebaseapp.com",
  projectId: "mulmed-proyek-akhir",
  storageBucket: "mulmed-proyek-akhir.firebasestorage.app",
  messagingSenderId: "86646194034",
  appId: "1:86646194034:web:143c40d86bd627a1aaa7eb",
  measurementId: "G-SSW7KEL6TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);