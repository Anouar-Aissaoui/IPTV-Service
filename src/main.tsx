import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// This is needed for react-snap
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      registration => {
        console.log('ServiceWorker registration successful');
      },
      err => {
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}