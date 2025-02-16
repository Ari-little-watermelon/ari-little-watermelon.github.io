import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export const LoadingScreen = ({ isLoading, onAnimationComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsExiting(true);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(onAnimationComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onAnimationComplete]);

  return (
    <div className={`loading-overlay ${isExiting ? 'exit-animation' : ''}`}>
      <div className={`loading-content ${isExiting ? 'content-exit' : ''}`}>
        <div className="watermelon-loader">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" className="watermelon-rind" />
            <circle cx="50" cy="50" r="40" className="watermelon-flesh" />
            <g className="seeds">
              <ellipse cx="40" cy="35" rx="2" ry="3" transform="rotate(-30 40 35)" />
              <ellipse cx="60" cy="35" rx="2" ry="3" transform="rotate(30 60 35)" />
              <ellipse cx="50" cy="45" rx="2" ry="3" />
              <ellipse cx="35" cy="50" rx="2" ry="3" transform="rotate(-45 35 50)" />
              <ellipse cx="65" cy="50" rx="2" ry="3" transform="rotate(45 65 50)" />
              <ellipse cx="45" cy="60" rx="2" ry="3" transform="rotate(-30 45 60)" />
              <ellipse cx="55" cy="60" rx="2" ry="3" transform="rotate(30 55 60)" />
            </g>
          </svg>
        </div>
        <div className="loading-text">Loading my portfolio...</div>
      </div>
    </div>
  );
};