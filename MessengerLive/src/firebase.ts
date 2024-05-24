// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyArfxIY40ozN4PMJSxcCjwIuxsa8oc5EKc',
    authDomain: 'messenger-live-ab754.firebaseapp.com',
    projectId: 'messenger-live-ab754',
    storageBucket: 'messenger-live-ab754.appspot.com',
    messagingSenderId: '1092018817537',
    appId: '1:1092018817537:web:cb20b2d96edcd3b9674e00'
}

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(FirebaseApp)
const db = getFirestore(FirebaseApp)
export { db, auth };
