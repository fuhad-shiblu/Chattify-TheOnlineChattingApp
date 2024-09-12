// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Koya3FIh0lAz4iMKtcf7ZPabh1DTbxA",
  authDomain: "chattify---the-chating-app.firebaseapp.com",
  projectId: "chattify---the-chating-app",
  storageBucket: "chattify---the-chating-app.appspot.com",
  messagingSenderId: "1059373774696",
  appId: "1:1059373774696:web:b34b8c5b7e013c860a48dd",
  measurementId: "G-2Y73NHH55S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database