import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDLet5oO9q9BATYkz_VK9SZ2H3oby9b_Lo",
  authDomain: "chat-application-8dbcc.firebaseapp.com",
  projectId: "chat-application-8dbcc",
  storageBucket: "chat-application-8dbcc.appspot.com",
  messagingSenderId: "32573897426",
  appId: "1:32573897426:web:d3687bd3dea34526fa8b0b",
  measurementId: "G-6KCB26WF1M"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()

export { auth, db, provider }