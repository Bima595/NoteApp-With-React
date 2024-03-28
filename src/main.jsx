// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from '././components/App'; // Import App with the correct path

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
