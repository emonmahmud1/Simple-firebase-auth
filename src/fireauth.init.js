import { getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsPsgXYRd_jPKvP4yexOhFjeSG53hhfhw",
  authDomain: "auth-practice-f151d.firebaseapp.com",
  projectId: "auth-practice-f151d",
  storageBucket: "auth-practice-f151d.appspot.com",
  messagingSenderId: "293094761521",
  appId: "1:293094761521:web:89c85467239b55a3342110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);