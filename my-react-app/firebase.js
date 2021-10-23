// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrAICJKBxldE9ZQU93WBNz6utcBHViUaE",
  authDomain: "proxilane-957db.firebaseapp.com",
  projectId: "proxilane-957db",
  storageBucket: "proxilane-957db.appspot.com",
  messagingSenderId: "398634273485",
  appId: "1:398634273485:web:67aeac4d270bbe3b5ef784",
  measurementId: "G-DY8WL53Z3X"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };