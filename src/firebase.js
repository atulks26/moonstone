import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDuwE2rb2YB74NZP1skce1LpCboUfl83Y",
  authDomain: "moonstone-826a3.firebaseapp.com",
  projectId: "moonstone-826a3",
  storageBucket: "moonstone-826a3.appspot.com",
  messagingSenderId: "982673354055",
  appId: "1:982673354055:web:91a0568bc5f2fc21233062",
  measurementId: "G-3SPTWB0HEJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
