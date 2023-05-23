import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBnmovf3hMkJrk_I6QdOzHRz38p_GBHvS4",
    authDomain: "marketbox-74834.firebaseapp.com",
    projectId: "marketbox-74834",
    storageBucket: "marketbox-74834.appspot.com",
    messagingSenderId: "1007880270843",
    appId: "1:1007880270843:web:580aa7b5d228c40ed4515e",
    measurementId: "G-YM0FJ1ZCJK"
}


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)