import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import App from './App';
import RoutesComponents from './components/RoutesComponents';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesComponents />
  </React.StrictMode>
);

