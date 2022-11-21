// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDLsqAbTBJBeuebPby_8pD-QX1QDdafgK0",
  authDomain: "quiet-mind-1.firebaseapp.com",
  projectId: "quiet-mind-1",
  storageBucket: "quiet-mind-1.appspot.com",
  messagingSenderId: "810128549251",
  appId: "1:810128549251:web:0a89a2b5dbcd3e342542b6",
  measurementId: "G-PN9CR5QVTY",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export {
  db,
  auth,
  firebase,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
};
