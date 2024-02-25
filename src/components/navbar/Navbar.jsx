import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="skillrevive__navbar">
      <div className="skillrevive__navbar-links">
        <div className="skillrevive__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <h1>SkillRevive</h1>
        </div>
        <div className="skillrevive__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wskillrevive">What is skillrevive?</a></p>
          <p><a href="#possibility">Browse Talents</a></p>
          <p><a href="#features">Browse Works</a></p>
          <p><a href="#blog">Blogs</a></p>
          <p><a href="#chat">Chat with us</a></p>
        </div>
      </div>
      <div className="skillrevive__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="skillrevive__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="skillrevive__navbar-menu_container scale-up-center">
          <div className="skillrevive__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wskillrevive">What is skillrevive?</a></p>
            <p><a href="#possibility">Browse Talents</a></p>
            <p><a href="#features">Browse Works</a></p>
            <p><a href="#blog">Blogs</a></p>
            <p><a href="#chat">Chat with us</a></p>
          </div>
          <div className="skillrevive__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;