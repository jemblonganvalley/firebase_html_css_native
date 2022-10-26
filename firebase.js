// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ7dVj8NBO_WIo0JlWgyOySPlcCauRR1s",
  authDomain: "fadli-b9-offline.firebaseapp.com",
  projectId: "fadli-b9-offline",
  storageBucket: "fadli-b9-offline.appspot.com",
  messagingSenderId: "284109135806",
  appId: "1:284109135806:web:b54370a94d1f30c06d63ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)