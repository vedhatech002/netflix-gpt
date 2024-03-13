// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHsUWKIepZmy7JPIdTBvji8hEgA1hwsXI",
  authDomain: "netflixgpt-d92c5.firebaseapp.com",
  projectId: "netflixgpt-d92c5",
  storageBucket: "netflixgpt-d92c5.appspot.com",
  messagingSenderId: "466939499795",
  appId: "1:466939499795:web:ea5eeb79011da7cb10b6e6",
  measurementId: "G-1CTJ58XH6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
