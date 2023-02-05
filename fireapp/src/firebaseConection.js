import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAAnl-F6vkSx14h_RIwh2A_HJI4gmXEPWA',
  authDomain: 'curso-edf17.firebaseapp.com',
  projectId: 'curso-edf17',
  storageBucket: 'curso-edf17.appspot.com',
  messagingSenderId: '79197422877',
  appId: '1:79197422877:web:1f70748a86d335de920df4',
  measurementId: 'G-5YW1YZPZW0',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
