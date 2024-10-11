import React from 'react';
import './Redeem.css';

const Redeem = () => {
  const performanceData = {
    problemsSolved: 120,
    accuracy: '85%',
    currentStreak: 15,
    points: 200,
    rewards: '1 Free Month of Premium',
  };

  return (
    <div className="redeem-container">
      <h1>Performance Summary</h1>
      
      <div className="performance-metrics">
        <div className="metric-item">
          <h2>Problems Solved</h2>
          <p>{performanceData.problemsSolved}</p>
        </div>
        
        <div className="metric-item">
          <h2>Accuracy</h2>
          <p>{performanceData.accuracy}</p>
        </div>
        
        <div className="metric-item">
          <h2>Current Streak</h2>
          <p>{performanceData.currentStreak} days</p>
        </div>
        
        <div className="metric-item">
          <h2>Points</h2>
          <p>{performanceData.points}</p>
        </div>
        
        <div className="metric-item">
          <h2>Rewards</h2>
          <p>{performanceData.rewards}</p>
        </div>
      </div>
    </div>
  );
};

export default Redeem;

