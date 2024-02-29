import React from 'react';
import './togglepage.css'; // You can define your CSS styles in this file
import '../../containers/toggle/toggle.css';
import startImg from '../../assets/toggledown1.png';
import endImg from '../../assets/toggledown2.png';
import client from '../../assets/client.svg';
import freelancer from '../../assets/freelancer.svg';
import team from '../../assets/team.svg';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className="top-panel">
        <div className="grid-wrapper grid-col-auto">
          <label for="radio-card-1" className="radio-card">
            <input type="radio" name="radio-card" id="radio-card-1" checked />
            <div className="card-content-wrapper">
              <span className="check-icon"></span>
              <div className="card-content">
                <img
                  src={client}
                  alt=""
                />
                <h4>Join as client</h4>
                <h5>Get your work done with best freelancer</h5>
              </div>
            </div>
          </label>
          {/* /.radio-card */}

          <label for="radio-card-2" className="radio-card">
            <input type="radio" name="radio-card" id="radio-card-2" />
            <div className="card-content-wrapper">
              <span className="check-icon"></span>
              <div className="card-content">
                <img
                  src={freelancer}
                  alt=""
                />
                <h4>Join as a freelancer</h4>
                <h5>Need money? don't wait, be an earner now.</h5>
              </div>
            </div>
          </label>
          {/* /.radio-card */}
          <label for="radio-card-3" className="radio-card">
            <input type="radio" name="radio-card" id="radio-card-3" />
            <div className="card-content-wrapper">
              <span className="check-icon"></span>
              <div className="card-content">
                <img src={team} alt="" />
                  
                
                <h4>Join as a team</h4>
                <h5>Bring your own team to grab big projects.</h5>
              </div>
            </div>
          </label>
          {/* /.radio-card */}
        </div>
        {/* /.grid-wrapper */}
        <div className='button'>
          <NavLink to="/signup">
            <button className="btn first">Button 1</button>
          </NavLink>  
        </div>
      </div>
      {/* /.top-panel */}
      <div className="bottom-panel">
        <img className="start-img" src={startImg} alt="Start Image" />
        <img className="end-img" src={endImg} alt="End Image" />
      </div>
      {/* /.bottom-panel */}
    </div>
    /* /.container */
  );
}

export default App;
