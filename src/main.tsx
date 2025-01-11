import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n/i18n.ts'

const rootElement = document.getElementById('root') as HTMLElement;

// Wait for i18n to be initialized before rendering
const renderApp = () => {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(
      rootElement,
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

  // Register service worker for react-snap
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(
        registration => {
          console.log('ServiceWorker registration successful:', window.location.href);
        },
        err => {
          console.error('ServiceWorker registration failed: ', err);
        }
      );
    });
  }
};

// Initialize rendering
renderApp();

// Add react-snap configuration
if (typeof window !== 'undefined') {
  window.snapSaveState = () => ({
    __PRELOADED_STATE__: {} // Add any initial state here if needed
  });
}