import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import ChatPopup from "../chatbot/ChatPopup";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false); // State to manage chat popup

  return (
    <div className="skillrevive__navbar">
      <div className="skillrevive__navbar-links">
        <div className="skillrevive__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h1>SkillRevive</h1>
        </div>
        <div className="skillrevive__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is skillrevive?</a>
          </p>
          <p>
            <a href="#">Browse Talents</a>
          </p>
          <p>
            <a href="#">Browse Works</a>
          </p>
          <p>
            <a href="#">Blogs</a>
          </p>
          <p>
            <a href="#">Chat with us</a>
          </p>
        </div>
      </div>
      <div className="skillrevive__navbar-sign">
        {/* <NavLink to="/login"> */}
        <p>Sign in</p>
        {/*  </NavLink> */}

        {/* <NavLink to="/toggle"> */}
        <button type="button">Sign up</button>
        {/* /</NavLink> */}
      </div>
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
        {toggleMenu && (
          <div className="skillrevive__navbar-menu_container scale-up-center">
            <div className="skillrevive__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is skillrevive?</a>
              </p>
              <p>
                <a href="#">Browse Talents</a>
              </p>
              <p>
                <a href="#">Browse Works</a>
              </p>
              <p>
                <a href="#">Blogs</a>
              </p>
              <p>
                <a href="#chat" onClick={() => setShowChatPopup(true)}>
                  Chat with us
                </a>{" "}
                {/* Open chat popup when clicked */}
              </p>
            </div>
            <div className="skillrevive__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
      {showChatPopup && <ChatPopup />}
    </div>
  );
};

export default Navbar;
