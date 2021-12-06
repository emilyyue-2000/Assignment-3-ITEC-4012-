import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfNlkcHpdESJGdmCh5lAhbatghPrgLRaA",
  authDomain: "assignment-3-9e970.firebaseapp.com",
  projectId: "assignment-3-9e970",
  storageBucket: "assignment-3-9e970.appspot.com",
  messagingSenderId: "342907249067",
  appId: "1:342907249067:web:06dd3d60aac890e4a732ee"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
