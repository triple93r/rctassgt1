import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RegistrationForm from './RegistrationForm';
import UserTable from './UserTable';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


