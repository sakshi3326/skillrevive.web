import React, { useState } from "react";
import "./UserProfile.css"; // Import your CSS file for styling

const UserProfile = () => {
  // State for selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Sample dropdown values
  const dropdownValues = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];

  return (
    <div className="user-profile">
      {/* Left part of the screen */}
      <div className="left-container">
        {/* Circular container with camera icon */}
        <div className="profile-image-container">
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" className="profile-image" />
          ) : (
            <div className="profile-image-placeholder">
              <label htmlFor="file-input">
                <i className="fas fa-camera"></i>
              </label>
              <input type="file" id="file-input" onChange={handleImageChange} />
            </div>
          )}
        </div>
        {/* Title and Description input fields */}
        <input
          type="text"
          placeholder="Title"
          id="title"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Description"
          id="description"
          className="input-field"
        />
      </div>

      {/* Right part of the screen */}
      <div className="right-container">
        {/* Text fields */}
        <div className="text-fields">
          {/* Row 1 */}
          <div className="row">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
            />
            <input type="text" placeholder="Email" className="input-field" />
          </div>
          {/* Row 2 */}
          <div className="row">
            <input
              type="text"
              placeholder="Contact no."
              className="input-field"
            />
            <input
              type="text"
              placeholder="Type(Freelancer/Client)"
              className="input-field"
            />
          </div>
          {/* Row 3 */}
          <div className="row">
            <input
              type="text"
              placeholder="Average Charge"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Drive link"
              className="input-field"
            />
          </div>
          {/* Row 4 */}
          <div className="row">
            <input
              type="text"
              placeholder="Experience"
              className="input-field"
            />
            <input type="text" placeholder="Location" className="input-field" />
          </div>
          {/* Row 5 */}
          <div className="row">
            <input
              type="text"
              placeholder="Task Name"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Task's Budget"
              className="input-field"
            />
          </div>
          {/* Row 6 */}
          <div className="row">
            <input
              type="text"
              placeholder="Time Duration"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Extra amount"
              className="input-field"
            />
          </div>
        </div>
        {/* Dropdown fields */}
        <div className="dropdowns">
          <select className="dropdown input-field">
            {dropdownValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
          <select className="dropdown input-field">
            {dropdownValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
