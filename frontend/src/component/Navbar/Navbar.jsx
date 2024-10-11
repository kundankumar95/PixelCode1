import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import notification from '../assets/image(2).png';
import user from '../assets/image(1).png';

const Navbar = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false); 

  const handleSignIn = () => {
    setIsUserSignedIn(true); 
  };

  const handleSignOut = () => {
    setIsUserSignedIn(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link style={{textDecoration: 'none' }} to="/" className="logo">PixelCode</Link>
        <Link style={{textDecoration: 'none' }} to="/explore" className="nav-item">Explore</Link>
        <Link style={{textDecoration: 'none' }} to="/problems" className="nav-item">Problems</Link>
        <Link style={{textDecoration: 'none' }} to="/discuss" className="nav-item">Discuss</Link>
        <div className="nav-item dropdown">
          <span>Interview</span>
          <div className="dropdown-content">
            <Link style={{textDecoration: 'none' }} to="/interview/online">Online Interview</Link>
            <Link style={{textDecoration: 'none' }} to="/interview/assessment">Assessment</Link>
          </div>
        </div>
        <div className="nav-item dropdown">
          <span>Store</span>
          <div className="dropdown-content">
            <Link style={{textDecoration: 'none' }} to="/store/redeem">Redeem</Link>
            <Link style={{textDecoration: 'none' }} to="/store/premium">Premium</Link>
          </div>
        </div>
      </div>
       <div className="navbar-right">
        {/* Conditionally render the icons and links based on user sign-in status */}
        {isUserSignedIn ? (
          <>
            <img src={notification} alt="Notifications" className="icon" />
            <img src={user} alt="User" className="icon" />
            <Link to="/premium" className="premium-btn" style={{ textDecoration: 'none' }}>
              Premium
            </Link>
            <button onClick={handleSignOut} className="sign-out-btn">Sign Out</button>
          </>
        ) : (
          <button onClick={handleSignIn} className="sign-in-btn">Sign In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

