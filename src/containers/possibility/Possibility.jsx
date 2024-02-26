import React from 'react';
import possibilityImage from '../../assets/noperson.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Equip yourself to work alongside us, where you'll encounter numerous possibilities for project completion, skill advancement, and revenue generation, all while securing regular work opportunities.</p>
      <h4>Start Your Journey Here</h4>
    </div>
  </div>
);

export default Possibility;