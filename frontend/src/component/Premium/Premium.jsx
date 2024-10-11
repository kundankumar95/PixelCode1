import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Premium.css';

const Premium = () => {
  const navigate = useNavigate();

  const handlePlanSelect = (plan) => {
    navigate(`/payment/${plan}`);
  };

  return (
    <div className="premium-container">
      <header className="premium-header">
        <h1>Unlock Premium Features</h1>
        <p>Upgrade to Premium for exclusive access to advanced content and tools.</p>
      </header>

      <section className="premium-benefits">
        <h2>Why Go Premium?</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Advanced Problem Sets</h3>
            <p>Get access to exclusive problem sets and challenges designed for advanced practice.</p>
          </div>
          <div className="benefit-item">
            <h3>Expert Solutions</h3>
            <p>View detailed solutions and explanations from top experts in the field.</p>
          </div>
          <div className="benefit-item">
            <h3>Ad-Free Experience</h3>
            <p>Enjoy an uninterrupted and ad-free browsing experience.</p>
          </div>
          <div className="benefit-item">
            <h3>Priority Support</h3>
            <p>Get prioritized support for any issues or queries you may have.</p>
          </div>
        </div>
      </section>

      <section className="premium-plans">
        <h2>Select Your Plan</h2>
        <div className="plans-list">
          <div className="plan-item" onClick={() => handlePlanSelect('basic')}>
            <h3>Basic Plan</h3>
            <p>$9.99/month</p>
            <p>Access to standard problems and features.</p>
            <button className="select-btn">Select Plan</button>
          </div>
          <div className="plan-item" onClick={() => handlePlanSelect('premium')}>
            <h3>Premium Plan</h3>
            <p>$29.99/month</p>
            <p>All benefits including advanced problems and expert solutions.</p>
            <button className="select-btn">Select Plan</button>
          </div>
          <div className="plan-item" onClick={() => handlePlanSelect('pro')}>
            <h3>Pro Plan</h3>
            <p>$49.99/month</p>
            <p>All benefits plus priority support and exclusive content.</p>
            <button className="select-btn">Select Plan</button>
          </div>
        </div>
      </section>

      <section className="premium-call-to-action">
        <h2>Ready to Upgrade?</h2>
        <p>Join our premium community and elevate your skills to the next level.</p>
      </section>

      <footer className="premium-footer">
        <p>Have questions? <a href="/contact">Contact us</a> for more information.</p>
      </footer>
    </div>
  );
};

export default Premium;
