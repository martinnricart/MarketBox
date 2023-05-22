import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.css'
import { CartProvider } from './context/cartContext';

const firebaseConfig = {
  apiKey: "AIzaSyBnmovf3hMkJrk_I6QdOzHRz38p_GBHvS4",
  authDomain: "marketbox-74834.firebaseapp.com",
  projectId: "marketbox-74834",
  storageBucket: "marketbox-74834.appspot.com",
  messagingSenderId: "1007880270843",
  appId: "1:1007880270843:web:580aa7b5d228c40ed4515e",
  measurementId: "G-YM0FJ1ZCJK"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
