// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBPD1XnczghSxUM39md6pqjUL6yR8Nx4Qs",
  authDomain: "giftshop-3382a.firebaseapp.com",
  projectId: "giftshop-3382a",
  storageBucket: "giftshop-3382a.appspot.com",
  messagingSenderId: "843522170381",
  appId: "1:843522170381:web:114bd9959b068277533f44",
});

export const storageRef = getStorage(app);
