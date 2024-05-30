// frontend/src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} FitMonitor</p>
      {/* Add more footer content as needed */}
    </footer>
  );
};

export default Footer;
