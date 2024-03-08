import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lottie/progress.json';
import './progress.css';

const Progress = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Close the popup by calling the onClose function passed from the parent component
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={handleClose}>X</button>
        <Lottie options={defaultOptions} />
        <p className="popup-text">We're Working on It. Coming Shortly!</p>
      </div>
    </div>
  );
};

export default Progress;
