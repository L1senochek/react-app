import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import ErrorBoundler from './components/ErrorBoundler/ErrorBoundler';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundler>
      <App />
    </ErrorBoundler>
  </React.StrictMode>
);
