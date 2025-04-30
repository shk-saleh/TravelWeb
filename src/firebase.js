import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL6cIT0W_GvpvbvJgtLDtAeT2rQGHDcm8",
  authDomain: "travelweb-805cf.firebaseapp.com",
  projectId: "travelweb-805cf",
  storageBucket: "travelweb-805cf.firebasestorage.app",
  messagingSenderId: "622723709785",
  appId: "1:622723709785:web:1cbbcd5737aca74bed2a48"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
