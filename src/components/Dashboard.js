import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true });
    };

    const handleTileClick = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Welcome, {user?.name || 'User'}!</h1>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </header>
            <div className="dashboard-content">
                <div className="tiles-container">
                    <div 
                        className="dashboard-tile"
                        onClick={() => handleTileClick('/components')}
                    >
                        <h2>Components</h2>
                        <p>Explore React Components</p>
                    </div>
                    <div 
                        className="dashboard-tile"
                        onClick={() => handleTileClick('/api')}
                    >
                        <h2>API</h2>
                        <p>View API Documentation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
