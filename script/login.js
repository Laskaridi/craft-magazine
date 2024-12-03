import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#e-mail');
const agreeRadio = document.querySelector('input[name="marketingConsent"][value="agree"]');
const disagreeRadio = document.querySelector('input[name="marketingConsent"][value="disagree"]');
const signUpBtn = document.querySelector('#signUpBtn');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.login-message');

const showError = (message) => {
  errorMessage.style.display = 'block';
  errorMessage.textContent = message;
  successMessage.style.display = 'none';
};

const showSuccess = (message) => {
  successMessage.style.display = 'block';
  successMessage.textContent = message;
  errorMessage.style.display = 'none';
};

const handleEnterKey = async (event) => {
  if (event.key === 'Enter') {
    await handleSignUp();
  }
};

const handleSignUp = async () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const consent = agreeRadio.checked ? "agree" : disagreeRadio.checked ? "disagree" : null;

  if (!name) {
    showError("Please enter your name.");
    return;
  }
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    showError("Please enter a valid email address.");
    return;
  }
  if (!consent) {
    showError("Please indicate your marketing consent.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "newsletterSubscriptions"), {
      name,
      email,
      consent,
      timestamp: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);

    showSuccess("Thank you for signing up! You will receive updates soon.");

    nameInput.value = "";
    emailInput.value = "";
    agreeRadio.checked = false;
    disagreeRadio.checked = false;
  } catch (error) {
    console.error("Error adding document: ", error);
    showError("An error occurred while saving your data. Please try again later.");
  }
};

signUpBtn.addEventListener('click', handleSignUp);

nameInput.addEventListener('keydown', handleEnterKey);
emailInput.addEventListener('keydown', handleEnterKey);
agreeRadio.addEventListener('keydown', handleEnterKey);
disagreeRadio.addEventListener('keydown', handleEnterKey);

export {showError, showSuccess};