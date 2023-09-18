// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB9lbTn3yStApCA3AMycGiNBuRP_Xlqm4",
  authDomain: "vibe-music-8074d.firebaseapp.com",
  projectId: "vibe-music-8074d",
  storageBucket: "vibe-music-8074d.appspot.com",
  messagingSenderId: "27878563095",
  appId: "1:27878563095:web:3692b1f7ca2f908b0f6b52",
  measurementId: "G-NMMXFZ7BE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;