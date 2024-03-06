import React from 'react';
import possibilityImage from '../../assets/upliftednoperson.png';
import './possibility.css';
import { MdCheckCircle, MdSettings } from 'react-icons/md'; 
const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Equip yourself to work alongside us, where you'll encounter numerous possibilities for project completion, skill advancement, and revenue generation, all while securing regular work opportunities.</p>
      <h1 className="gradient__text">Elevate your work game <br/> with ease.</h1>
      <ul className='list'>
        <div className='highlights'><MdCheckCircle />Easy To join and start earning</div>
        <div className='highlights'><MdCheckCircle />Join as individual freelancer or with your own team</div>

        <div className='highlights'><MdCheckCircle />Post a need and bid on 3 freelancers to make process faster</div>
        <div className='highlights'><MdCheckCircle />Assistant service for each freelancer and client pair</div>
      </ul>
      <h4>Start Your Journey Here</h4>
    </div>
  </div>
);

export default Possibility;