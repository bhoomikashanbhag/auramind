import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDG_4XxjHhEgx3Cl_89FhzDkgFsmAqXw5E",
  authDomain: "auramind-ef564.firebaseapp.com",
  projectId: "auramind-ef564",
  storageBucket: "auramind-ef564.firebasestorage.app",
  messagingSenderId: "1022659118161",
  appId: "1:1022659118161:web:f0591b758ceb51df1de470",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)