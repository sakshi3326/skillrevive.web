import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/header.png';
import './header.css';

const Header = () => (
  <div className="skillrevive__header section__padding" id="home">
    <div className="skillrevive__header-content">
      <h1 className="gradient__text">Revitalize your craft, Reactivate your draft</h1>
      <p>Sick of rejection emails? It's time to elevate yourself and revive your talents. Let's prosper together...</p>

      <div className="skillrevive__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="skillrevive__header-content__people">
        <img src={people} />
        <p>1,600 people got their freelancers in last 24 hours</p>
      </div>
    </div>

    <div className="skillrevive__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;