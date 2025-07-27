import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// ✅ CHANGED: Imported sendPasswordResetEmail
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
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

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const signupForm = document.querySelector("form.signup");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  // ✅ ADDED: Select the forgot password link
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");

  // Toggle between forms
  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };

  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };

  signupLink.onclick = (e) => {
    e.preventDefault();
    signupBtn.click();
  };

  // ✅ ADDED: Forgot Password Handler
  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    const emailInput = loginForm.querySelector("input[type='email']");
    const email = emailInput.value;

    if (!email) {
      alert("Please enter your email address in the email field to reset your password.");
      emailInput.focus();
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Please check your inbox (and spam folder).");
      })
      .catch((error) => {
        alert("Error sending password reset email: " + error.message);
      });
  });

  // Sign Up Handler
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signupForm.querySelector("input[type='email']").value;
    const password = signupForm.querySelector("input[type='password']").value;
    const confirmPassword = signupForm.querySelector("input[placeholder='Confirm password']").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "suppliers", user.uid), {
        email: user.email,
        createdAt: new Date()
      });

      alert("Signup successful! Please login to continue.");
      loginBtn.click();
    } catch (error) {
      alert("Signup Error: " + error.message);
    }
  });

  // Login Handler
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector("input[type='email']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "supplier-dashboard.html";
    } catch (error) {
      alert("Login Error: " + error.message);
    }
  });
});