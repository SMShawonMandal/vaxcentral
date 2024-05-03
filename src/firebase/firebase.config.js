// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkTi_d8c7gZGMhdNqEQjadYhOnPkgZL6g",
  authDomain: "vaxcentral.firebaseapp.com",
  projectId: "vaxcentral",
  storageBucket: "vaxcentral.appspot.com",
  messagingSenderId: "1081458272070",
  appId: "1:1081458272070:web:d75783ae6e2fb2bbb0a747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;