import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';// tailwind
import 'font-awesome/css/font-awesome.min.css';//font awesome
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);
reportWebVitals();
