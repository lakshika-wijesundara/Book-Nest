import React from 'react';

import './HomePage.css';
import CoverImage from "../assets/CoverImage.png"; 
 // Ensure the file exists


const HomePage = () => (
  
  <div className="HomePage">
 
    <main className="main">
      <div className="text-section">
        <h1>Where Stories Come to Rest.</h1>
      </div>
      <div className="image-section">
        <img src={CoverImage} alt="Cover" className="cover-image" />
      </div>
    </main>
  </div>
);

export default HomePage;
