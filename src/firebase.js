import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBwgRXYqFTD_1mx_fOWzBorXTT-fry7Ddc",
  authDomain: "lord-of-the-beers.firebaseapp.com",
  projectId: "lord-of-the-beers",
  storageBucket: "lord-of-the-beers.appspot.com",
  messagingSenderId: "969686512911",
  appId: "1:969686512911:web:5fa662757237f2df88fa7a",
};

const firebaseApp =  initializeApp(firebaseConfig);

export default firebaseApp;
