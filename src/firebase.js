// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDpy4haFMHU4db8NDc_eJKYA5GZqiD_5Q",
  authDomain: "xeno-crm-f8619.firebaseapp.com",
  projectId: "xeno-crm-f8619",
  storageBucket: "xeno-crm-f8619.appspot.com",
  messagingSenderId: "768135150694",
  appId: "1:768135150694:web:724a8e5e56dfafec1c41a7",
  measurementId: "G-HYE4TWDY06"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
