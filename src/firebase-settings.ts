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
  apiKey: 'AIzaSyDqrQKtd9G70ZMjTRn6xLVHEwMo8_PWYCE',
  authDomain: 'hermes-2cb56.firebaseapp.com',
  projectId: 'hermes-2cb56',
  storageBucket: 'hermes-2cb56.appspot.com',
  messagingSenderId: '157797851869',
  appId: '1:157797851869:web:28a39cb3ea083513e53134',
  measurementId: 'G-9JDZQHTL8F'
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