import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="breadcrumb">Home / Profile</div>
      <div className="profile-card">
        <div className="profile-left">
          <div className="profile-photo"></div>
          <button className="edit-button">Edit <span className="edit-icon">✏️</span></button>
          <div className="profile-info">
            <h3>Profile Information</h3>
            <label>User Name</label>
            <input type="text" placeholder="User Name" />
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
          <button className="logout-button">Logout</button>
        </div>
        <div className="profile-right">
          <h3>Library List</h3>
          <div className="library-list">
            <div className="library-item">
              {/* Example Book Card */}
              <div className="book-placeholder"></div>
              <div className="book-details">
                <span>⭐ 4.7</span>
                <span>💬 256</span>
                <span>📚 12k reads</span>
              </div>
            </div>
            <div className="library-item">
              {/* Example Book Card */}
              <div className="book-placeholder"></div>
              <div className="book-details">
                <span>⭐ 4.8</span>
                <span>💬 125</span>
                <span>📚 8k reads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
