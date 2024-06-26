import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your root component

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Render your root component */}
  </React.StrictMode>
);
