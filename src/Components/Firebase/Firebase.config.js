// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFrRTqHuIZk1WORXdxgxTVu5MnJW21GpE",
  authDomain: "kawaiikorner-e8b83.firebaseapp.com",
  projectId: "kawaiikorner-e8b83",
  storageBucket: "kawaiikorner-e8b83.appspot.com",
  messagingSenderId: "607552257481",
  appId: "1:607552257481:web:08f3331895bd5f6e767c18"
};

// Initialize Firebase
const kawaiiapp = initializeApp(firebaseConfig);

export default kawaiiapp