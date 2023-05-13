import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './index.css';
import { Provider } from 'react-redux';
import store from './container/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
