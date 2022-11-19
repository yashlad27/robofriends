import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import 'tachyons';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
