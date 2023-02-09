// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD13E1zhgv-PkIZzfMYKpZ8eRa9zS-ze-8",
  authDomain: "vue3-2022-udemy.firebaseapp.com",
  projectId: "vue3-2022-udemy",
  storageBucket: "vue3-2022-udemy.appspot.com",
  messagingSenderId: "543988092948",
  appId: "1:543988092948:web:e2caf59c38956636ac9701",
}

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
