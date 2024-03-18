import React from 'react';
import './avatar.css';
import { avatar01, avatar02, avatar03, avatar04, avatar05, avatar06, avatar07, avatar08, avatar09, avatar10, avatar11 } from './imports';


const Avatar = ({ onClose, onAvatarClick }) => {
  const handleClose = () => {
    onClose(); // Close the popup by calling the onClose function passed from the parent component
  };

  return (
    <div className="popup">
      <button className="close-button" onClick={handleClose}>X</button>
      <div className="popup-inner">
        <div className="image-grid">
          <div className="avatar-card">
            <img src={avatar01} alt="Avatar 1" onClick={() => onAvatarClick(avatar01)} />
            <p>Assignment Writer</p>
          </div>
          <div className="avatar-card">
            <img src={avatar02} alt="Avatar 2" onClick={() => onAvatarClick(avatar02)} />
            <p>Frontend Developer</p>
          </div>
          <div className="avatar-card">
            <img src={avatar03} alt="Avatar 3" onClick={() => onAvatarClick(avatar03)} />
            <p>Backend Developer</p>
          </div>
          <div className="avatar-card">
            <img src={avatar04} alt="Avatar 4" onClick={() => onAvatarClick(avatar04)} />
            <p>Dev ops</p>
          </div>
          <div className="avatar-card">
            <img src={avatar05} alt="Avatar 5" onClick={() => onAvatarClick(avatar05)} />
            <p>Digital Marketer</p>
          </div>
          <div className="avatar-card">
            <img src={avatar06} alt="Avatar 6" onClick={() => onAvatarClick(avatar06)} />
            <p>Graphic Designer</p>
          </div>
          <div className="avatar-card">
            <img src={avatar07} alt="Avatar 7" onClick={() => onAvatarClick(avatar07)} />
            <p>Translator</p>
          </div>
          <div className="avatar-card">
            <img src={avatar08} alt="Avatar 8" onClick={() => onAvatarClick(avatar08)} />
            <p>Presenter</p>
          </div>
          <div className="avatar-card">
            <img src={avatar09} alt="Avatar 9" onClick={() => onAvatarClick(avatar09)} />
            <p>Video Editor</p>
          </div>
          <div className="avatar-card">
            <img src={avatar10} alt="Avatar 10" onClick={() => onAvatarClick(avatar10)} />
            <p>Content Writer</p>
          </div>
          <div className="avatar-card">
            <img src={avatar11} alt="Avatar 11" onClick={() => onAvatarClick(avatar11)} />
            <p>Mobile App Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
