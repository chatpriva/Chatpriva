
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBO66blfTWDG9PPmWddQs3n-Fmj6bufBow",
  authDomain: "vaultbox-876f9.firebaseapp.com",
  projectId: "vaultbox-876f9",
  storageBucket: "vaultbox-876f9.firebasestorage.app",
  messagingSenderId: "499854233557",
  appId: "1:499854233557:web:e51d8c86a063868ae1b75c",
  measurementId: "G-J32F24E9CM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
