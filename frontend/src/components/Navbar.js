// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo3 from '../assets/img/Logo3.png';

// Navigation bar
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo3} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
