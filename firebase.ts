// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_qk_U9W9Aeyy3nLszdNt4daNBrFjMgDI",
    authDomain: "netflix-clone-f1f39.firebaseapp.com",
    projectId: "netflix-clone-f1f39",
    storageBucket: "netflix-clone-f1f39.appspot.com",
    messagingSenderId: "912572684649",
    appId: "1:912572684649:web:3fdc2728a5cee0bbdb85f8"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }