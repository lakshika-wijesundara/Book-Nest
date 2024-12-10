import React from "react";
import "./Navbar.css";
import logoIcon from "../assets/logoIcon.png"; // Correct path
import profileIcon from "../assets/profileicon.png"; // Correct path

const Navbar = () => (
  <nav className="navbar">
    <img src={logoIcon} alt="BookNest Logo" className="logo" />
    <div className="navbar-links">
      <a href="/homepage">Home</a>
      <a href="/browse">Browse</a>
      <a href="/write">Write</a>
    </div>
    <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
  </nav>
);

export default Navbar;
