import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';// tailwind
import 'font-awesome/css/font-awesome.min.css';//font awesome
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
  
);
reportWebVitals();
