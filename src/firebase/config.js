import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBj8VMnNlEAV-eklwYl9jzOMTboUt-4TXI",
  authDomain: "petricor-stor-db.firebaseapp.com",
  projectId: "petricor-stor-db",
  storageBucket: "petricor-stor-db.firebasestorage.app",
  messagingSenderId: "114368538324",
  appId: "1:114368538324:web:d95aeec3681bb2dc997d41"
}

export const app = initializeApp(firebaseConfig);