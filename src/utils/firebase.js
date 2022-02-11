import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "akds-portfolio.firebaseapp.com",
  databaseURL: "https://akds-portfolio.firebaseio.com",
  projectId: "akds-portfolio",
  storageBucket: "akds-portfolio.appspot.com",
  messagingSenderId: "410903148637",
  appId: "1:410903148637:web:ea3f2310c8b93e14f4b5b4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
