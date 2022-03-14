// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqOgizUSx7Sx4RudGJH841N0ODjepjMl4",
  authDomain: "siosapp-335118.firebaseapp.com",
  databaseURL: "https://siosapp-335118-default-rtdb.firebaseio.com",
  projectId: "siosapp-335118",
  storageBucket: "siosapp-335118.appspot.com",
  messagingSenderId: "519653301005",
  appId: "1:519653301005:web:0022c8a20cf01feab7ae44",
  measurementId: "G-0FQ0WFXJGT"
};

// let app;
// if (firebase.apps.lenght === 0) {
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig);
// }else{
//     app = firebase.app()
// }

// const auth = firebase.auth().useEmulator("http://localhost:9099/");
const auth = firebase.auth();
auth.useEmulator("http://localhost:9099");

export { auth };