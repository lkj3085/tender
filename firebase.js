import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvsM06vaq_5cpey7gTCb3yDk8XBosjV3w",
  authDomain: "tender-90369.firebaseapp.com",
  projectId: "tender-90369",
  storageBucket: "tender-90369.appspot.com",
  messagingSenderId: "529316031537",
  appId: "1:529316031537:web:3673908e2c0bc2f5d07910",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
