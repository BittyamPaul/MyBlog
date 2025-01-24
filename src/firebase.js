// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB832hP3fjPvrrI9x-KKzBBzgljI9CgfxA",
  authDomain: "myblog-dfa9f.firebaseapp.com",
  projectId: "myblog-dfa9f",
  storageBucket: "myblog-dfa9f.firebasestorage.app",
  messagingSenderId: "355239188133",
  appId: "1:355239188133:web:0012f4641d7e876ce89f4c",
  measurementId: "G-X6FQZLGK9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);