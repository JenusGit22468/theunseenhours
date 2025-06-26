// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkHmWUqlZQnZDs0Ytq5O1v6M4oji6PGms",
  authDomain: "the-unseen-hours.firebaseapp.com",
  projectId: "the-unseen-hours",
  storageBucket: "the-unseen-hours.firebasestorage.app",
  messagingSenderId: "259985134958",
  appId: "1:259985134958:web:9a0ff79437723e90951d7f",
  measurementId: "G-M6VZQR0CGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);