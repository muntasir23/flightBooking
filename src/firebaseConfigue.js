import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCbEd9r-kM4dWYpDS2QS8JzUkMPeH0_UkI",
    authDomain: "blog-d6e27.firebaseapp.com",
    projectId: "blog-d6e27",
    storageBucket: "blog-d6e27.appspot.com",
    messagingSenderId: "824540131008",
    appId: "1:824540131008:web:fa2aee2d59781454c4c725"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
