import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8zr9QJFCnzP3GjKlkmogFrWYnIWEHW8A",
  authDomain: "clone-ffeb8.firebaseapp.com",
  projectId: "clone-ffeb8",
  storageBucket: "clone-ffeb8.appspot.com",
  messagingSenderId: "54305971054",
  appId: "1:54305971054:web:971d5ca27abf1d264abf7f",
  measurementId: "G-XWS8D2D9ES",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider, serverTimestamp };
