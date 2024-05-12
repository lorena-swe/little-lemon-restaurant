import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbR2x-mwZ8eF5ileMV2w6mrWbxIfzMAY0",
  authDomain: "little-lemon-5df17.firebaseapp.com",
  projectId: "little-lemon-5df17",
  storageBucket: "little-lemon-5df17.appspot.com",
  messagingSenderId: "956425757764",
  appId: "1:956425757764:web:8d48ce6e0b840a4041c811",
  measurementId: "G-2EFYYP7V94"
};

// Check if Firebase has already been initialized to avoid reinitialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;