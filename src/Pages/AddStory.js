import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStory.css';

const AddStory = () => {
  const navigate = useNavigate();

  const [bookDetails, setBookDetails] = useState({
    title: '',
    writer: '',
    introduction: '',
    genre: '',
    keywords: '',
    language: '',
    coverImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setBookDetails({ ...bookDetails, coverImage: file });
  };

  return (
    <div className="add-story-container">
      <h2 className="add-story-title">Add Story Details</h2>
      <div className="add-story-content">
        <div className="book-cover-section">
          <label htmlFor="cover-upload" className="cover-upload-label">
            <span className="plus-sign">+</span> Upload Cover
          </label>
          <input
            id="cover-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </div>
        <div className="book-details-section">
          <div className="form-group">
            <label htmlFor="title">Book Title:</label>
            <input
              id="title"
              name="title"
              type="text"
              value={bookDetails.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="writer">Writer:</label>
            <input
              id="writer"
              name="writer"
              type="text"
              value={bookDetails.writer}
              onChange={handleInputChange}
              placeholder="Enter writer name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="introduction">Book Introduction:</label>
            <textarea
              id="introduction"
              name="introduction"
              value={bookDetails.introduction}
              onChange={handleInputChange}
              placeholder="Write a brief introduction"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <input
              id="genre"
              name="genre"
              type="text"
              value={bookDetails.genre}
              onChange={handleInputChange}
              placeholder="Enter genre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="keywords">Keywords:</label>
            <input
              id="keywords"
              name="keywords"
              type="text"
              value={bookDetails.keywords}
              onChange={handleInputChange}
              placeholder="Enter keywords"
            />
          </div>
          <div className="form-group">
            <label htmlFor="language">Language:</label>
            <input
              id="language"
              name="language"
              type="text"
              value={bookDetails.language}
              onChange={handleInputChange}
              placeholder="Enter language"
            />
          </div>
          {/* Button navigates directly to '/createbook' */}
          <button className="submit-btn" onClick={() => navigate('/createbook')}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStory;
