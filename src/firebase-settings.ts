import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBU-XVfdaSQDY_TEn-lr7aRrcwLfi9l6xU',
  authDomain: 'helvic-gleams.firebaseapp.com',
  projectId: 'helvic-gleams',
  storageBucket: 'helvic-gleams.appspot.com',
  messagingSenderId: '694140323109',
  appId: '1:694140323109:web:f356861a19d53fdcb346cc',
  measurementId: 'G-04W1TVV423'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, auth, storage };

// connectAuthEmulator(auth, 'http://localhost:9099');
// connectFirestoreEmulator(db, 'localhost', 8080);
// connectStorageEmulator(storage, 'localhost', 9199);