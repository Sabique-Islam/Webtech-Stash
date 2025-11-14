import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { TransactionsProvider } from './context/TransactionsContext';
import { BillsProvider } from './context/BillsContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TransactionsProvider>
          <BillsProvider>
            <App />
          </BillsProvider>
        </TransactionsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
