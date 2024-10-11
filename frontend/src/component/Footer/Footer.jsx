import React from 'react';
import './Footer.css';
import india_flag from '../assets/india_flag.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span>Copyright © 2024 Code</span>
        <span>Help Center</span>
        <span>Jobs</span>
        <span>Bug Bounty</span>
        <span>Assessment</span>
        <span>Students</span>
        <span>Terms</span>
        <span>Privacy</span>
      </div>
      <div className="footer-image">
        <img src={india_flag} alt="India" />
      </div>
    </div>
  );
}

export default Footer;

