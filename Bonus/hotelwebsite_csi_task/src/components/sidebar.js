import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();  
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <nav className="sidebar-nav">
        <button onClick={() => handleNavigation('/booking')}>Booking Facilities</button>
        <button onClick={() => handleNavigation('/about')}>About Us</button>
        <button onClick={() => handleNavigation('/location')}>Location</button>
        <button onClick={() => handleNavigation('/contact')}>Contact</button>
        <button onClick={() => handleNavigation('/login')} className="login-btn">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
