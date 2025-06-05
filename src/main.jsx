import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';

// If your app is deployed under a subfolder like '/ForeverByReact',
// set basename accordingly, otherwise remove basename prop or set it to '/'.
const basename = "/ForeverByReact"; // change or remove if not deployed under subfolder

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
