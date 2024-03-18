import React from "react";
import UserprofilePage from "../../containers/userprofile/Userprofile";
import "./userprofilePage.css";
import Navbar from "../../components/navbar/Navbar";
const UserProfile = () => {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="userprofile">
        <UserprofilePage />
      </div>
    </div>
  );
};

export default UserProfile;
