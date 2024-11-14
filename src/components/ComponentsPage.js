import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './ComponentsPage.css';

const ComponentsPage = () => {
    const navigate = useNavigate();
    const navItems = [
        { name: 'Dashboard', path: '/components' },
        { name: 'Payroll Management', path: '/components/payroll-management' },
        { name: 'Run Payroll', path: '/components/run-payroll' },
        { name: 'Reports & Documents', path: '/components/reports' },
        { name: 'Enrollment - Inception', path: '/components/enrollment-inception' },
        { name: 'Enrollment - Switcher', path: '/components/enrollment-switcher' }
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="components-page">
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h3>Navigation</h3>
                </div>
                <ul className="sidebar-nav">
                    {navItems.map((item, index) => (
                        <li 
                            key={index} 
                            className="nav-item"
                            onClick={() => handleNavigation(item.path)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="main-content">
                <header className="page-header">
                    <h1>Components</h1>
                    <div 
                        className="home-icon"
                        onClick={() => navigate('/dashboard')}
                        title="Return to Dashboard"
                    >
                        <FaHome size={24} />
                    </div>
                </header>
                <div className="page-content">
                    <p>This is the Components page where you can explore various React components.</p>
                </div>
            </main>
        </div>
    );
};

export default ComponentsPage;
