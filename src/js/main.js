// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcxMIOzNRMWFnEJJAp__Dc-juznU-1TZM",
  authDomain: "luxeruem.firebaseapp.com",
  projectId: "luxeruem",
  storageBucket: "luxeruem.appspot.com",
  messagingSenderId: "313966861749",
  appId: "1:313966861749:web:272201f3f20bc493698dfc",
  measurementId: "G-2643BE9KB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const auth = getAuth(app);

