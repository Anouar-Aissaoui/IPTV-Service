import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

export function renderClient() {
  const root = document.getElementById('root');
  if (!root) throw new Error('Root element not found');
  
  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}