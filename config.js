import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jiadQXIq9K2sV71vEudJbRYl655Z2-o",
  authDomain: "firestoreforproject71.firebaseapp.com",
  projectId: "firestoreforproject71",
  storageBucket: "firestoreforproject71.appspot.com",
  messagingSenderId: "824124202119",
  appId: "1:824124202119:web:c9f87e1cce4efb82082c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
