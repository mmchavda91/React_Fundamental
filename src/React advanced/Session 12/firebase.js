// =====================================================
// Session 12: Firebase + Firestore Setup
// =====================================================
// firebase npm package is already installed in this project.
// This file initializes Firebase App + Firestore database.
// =====================================================

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ← Firestore import

// Firebase config values are read from .env file (see root .env)
// Replace placeholder values in .env with your real Firebase project config
const firebaseConfig = {
  apiKey:            process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig, "session12"); // named instance to avoid duplicate app error

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore and export it
// This 'db' object is what you use to read/write data in Firestore
export const db = getFirestore(app);

export default app;
