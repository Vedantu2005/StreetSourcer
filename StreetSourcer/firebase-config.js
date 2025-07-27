// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAYHdIkhYD0az_6D6awMUTAb40WctEmGCY",
  authDomain: "street-sourcer.firebaseapp.com",
  projectId: "street-sourcer",
  storageBucket: "street-sourcer.appspot.com",
  messagingSenderId: "15894964108",
  appId: "1:15894964108:web:a97b17e9f6ef26552b18a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
