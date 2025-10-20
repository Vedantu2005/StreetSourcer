import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
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
const provider = new GoogleAuthProvider();

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  // Login Elements
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginBtnEmail = document.getElementById("loginBtnEmail");
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");

  // Signup Elements
  const signupEmail = document.getElementById("signupEmail");
  const signupPassword = document.getElementById("signupPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const signupBtnEmail = document.getElementById("signupBtnEmail");

  // Google Login
  const googleLoginBtn = document.getElementById("googleLogin");

  // Email/Password Login
  loginBtnEmail.addEventListener("click", async () => {
    const email = loginEmail.value.trim();
    const password = loginPassword.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "supplier-dashboard.html";
    } catch (error) {
      alert("Login Error: " + error.message);
    }
  });

  // Password Reset
  forgotPasswordLink.addEventListener("click", async () => {
    const email = loginEmail.value.trim();
    if (!email) {
      alert("Enter email to reset password");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  });

  // Signup
  signupBtnEmail.addEventListener("click", async () => {
    const email = signupEmail.value.trim();
    const password = signupPassword.value;
    const confirm = confirmPassword.value;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "suppliers", user.uid), {
        email: user.email,
        createdAt: new Date()
      });

      alert("Signup successful! Please login.");
      document.getElementById("showLogin").click();
    } catch (error) {
      alert("Signup Error: " + error.message);
    }
  });

  // Google Login
  googleLoginBtn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "suppliers", user.uid), {
        email: user.email,
        createdAt: new Date()
      }, { merge: true });

      alert(`Welcome ${user.displayName || user.email}`);
      window.location.href = "supplier-dashboard.html";
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Google Login Error: " + error.message);
    }
  });
});
