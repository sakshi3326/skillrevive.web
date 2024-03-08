import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Progress from "../popuppage/Progress";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to manage the visibility of the popup

  const handleOptionClick = () => {
    setShowPopup(true); // Open the popup when any option is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="skillrevive__navbar">
      {/* Navbar links */}
      <div className="skillrevive__navbar-links">
        {/* Logo */}
        <div className="skillrevive__navbar-links_logo">
          <h1>SkillRevive</h1>
        </div>
        {/* Navigation links */}
        <div className="skillrevive__navbar-links_container">
          <p><a href="#home" onClick={handleOptionClick}>Home</a></p>
          <p><a href="#wgpt3">What is skillrevive?</a></p>
          <p><a href="#" onClick={handleOptionClick}>Browse Talents</a></p>
          <p><a href="#" onClick={handleOptionClick}>Browse Works</a></p>
          <p><a href="#" onClick={handleOptionClick}>Blogs</a></p>
          <p><a href="#" onClick={handleOptionClick}>Chat with us</a></p>
        </div>
      </div>
      {/* Sign up / Sign in buttons */}
      <div className="skillrevive__navbar-sign">
        <p onClick={handleOptionClick}>Sign in</p>
        <button type="button" onClick={handleOptionClick}>Sign up</button>
      </div>
      {/* Mobile menu toggle */}
      <div className="skillrevive__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {/* Mobile menu links */}
        {toggleMenu && (
          <div className="skillrevive__navbar-menu_container scale-up-center">
            <div className="skillrevive__navbar-menu_container-links">
              <p><a href="#home" onClick={handleOptionClick}>Home</a></p>
              <p><a href="#wgpt3">What is skillrevive?</a></p>
              <p><a href="#" onClick={handleOptionClick}>Browse Talents</a></p>
              <p><a href="#" onClick={handleOptionClick}>Browse Works</a></p>
              <p><a href="#" onClick={handleOptionClick}>Blogs</a></p>
              <p><a href="#" onClick={handleOptionClick}>Chat with us</a></p>
            </div>
            <div className="skillrevive__navbar-menu_container-links-sign">
              <p onClick={handleOptionClick}>Sign in</p>
              <button type="button" onClick={handleOptionClick}>Sign up</button>
            </div>
          </div>
        )}
      </div>
      {/* Render the popup */}
      {showPopup && <Progress onClose={handleClosePopup} />}
    </div>
  );
};

export default Navbar;
