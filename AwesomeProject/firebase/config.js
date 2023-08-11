import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmVTjlRZuOLE1CBKmrEKIyj4AZVhRe6Bg",
  authDomain: "awesomeproject-d5012.firebaseapp.com",
  databaseURL: "https://awesomeproject-d5012-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesomeproject-d5012",
  storageBucket: "awesomeproject-d5012.appspot.com",
  messagingSenderId: "931343399040",
  appId: "1:931343399040:web:9e75214991ad7a6fd78e65",
  measurementId: "G-REVHTQ6SPP"
};


  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);