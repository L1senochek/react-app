import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import ErrorBoundler from './components/ErrorBoundler/ErrorBoundler';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundler>
      <Provider store={configStore}>
        <App />
      </Provider>
    </ErrorBoundler>
  </React.StrictMode>
);
