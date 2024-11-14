import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ComponentsPage from './components/ComponentsPage';
import ApiPage from './components/ApiPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route 
              path="/components" 
              element={
                <RequireAuth>
                  <ComponentsPage />
                </RequireAuth>
              }
            />
            <Route 
              path="/api" 
              element={
                <RequireAuth>
                  <ApiPage />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

function RequireAuth({ children }) {
  const auth = JSON.parse(localStorage.getItem('user'));
  return auth ? children : <Navigate to="/" replace />;
}

export default App;
