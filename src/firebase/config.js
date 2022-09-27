// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuFaIMvblHA6aKL19Az00FsP09r6A3Bu4",
  authDomain: "charlottehornetsstore.firebaseapp.com",
  databaseURL: "https://charlottehornetsstore-default-rtdb.firebaseio.com",
  projectId: "charlottehornetsstore",
  storageBucket: "charlottehornetsstore.appspot.com",
  messagingSenderId: "474324517495",
  appId: "1:474324517495:web:8e822cb138496e3d427c72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);