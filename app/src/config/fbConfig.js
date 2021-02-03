import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBcgqUxwkzt4UPkmbKrTd_THq7C_9ly0XU',
  authDomain: 'ama-quella.firebaseapp.com',
  projectId: 'ama-quella',
  storageBucket: 'ama-quella.appspot.com',
  messagingSenderId: '1051488187',
  appId: '1:1051488187:web:107af17d8f3e500c6a1e9e',
  measurementId: 'G-L1DRG9QM6F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export default firebase;
