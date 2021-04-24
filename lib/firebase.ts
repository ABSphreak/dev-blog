import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAOgOzHADO9ULYPNQE7tBSJ9JcOnKJ2E5E',
  authDomain: 'dev-blog-f1ebd.firebaseapp.com',
  projectId: 'dev-blog-f1ebd',
  storageBucket: 'dev-blog-f1ebd.appspot.com',
  messagingSenderId: '380524020344',
  appId: '1:380524020344:web:5d193df6cf7675aa19238d',
  measurementId: 'G-MBQ0ETGV98',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
