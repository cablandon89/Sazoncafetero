import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "sansoncafetero.firebaseapp.com",
  projectId: "sansoncafetero",
  storageBucket: "sansoncafetero.appspot.com",
  messagingSenderId: "107183215960",
  appId: "1:107183215960:web:651b9b84a4879a805c012d"
});

export function getFirebase(){
  return app;
}

export function getFirestore(){
  return firebase.firestore(app);
}