import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import './registerServiceWorker';

const root = document.getElementById('root');
if (root === null) {
  throw new Error('Root element not found');
}
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
