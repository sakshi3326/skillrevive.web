import React, { useState } from "react";
import "./cta.css";
import Progress from "../popuppage/Progress"; // Import the Progress component

const CTA = () => {
  const [showPopup, setShowPopup] = useState(false); // State to manage the visibility of the popup

  const handleButtonClick = () => {
    setShowPopup(true); // Open the popup when the button is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <h3>
          Are you a consortium of freelancers ready to take on a large-scale
          project?
        </h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button" onClick={handleButtonClick}>Get Started</button>
      </div>
      {/* Render the popup */}
      {showPopup && <Progress onClose={handleClosePopup} />}
    </div>
  );
};

export default CTA;
