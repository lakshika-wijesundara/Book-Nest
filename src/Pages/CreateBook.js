import React, { useState } from 'react';
import './CreateBook.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="create-book-container">
      <header>
        <h1>Create Your Book</h1>
      </header>

      {/* Buttons */}
      <div className="buttons-container">
        <button className="btn publish-btn">Publish</button>
        <button className="btn preview-btn">Preview</button>
        <button className="btn save-btn">Save</button>
      </div>
      {/* Input Section */}
      <div className="input-section">
        {/* Title Input */}
        <div className="form-group">
          <label htmlFor="book-title">Book Title:</label>
          <input
            type="text"
            id="book-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your book title"
          />
        </div>

        {/* Subtitle Input */}
        <div className="form-group">
          <label htmlFor="book-subtitle">Chapter 1:</label>
          <input
            type="text"
            id="book-subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter your chapter 1"
          />
        </div>
      </div>

      {/* Content Editor Section */}
      <div className="text-editor-container">
        <label htmlFor="book-content">Book Content:</label>
        <ReactQuill
          value={content}
          onChange={setContent}
          placeholder="Write from here.."
          theme="snow"
        />
      </div>

    </div>
  );
};

export default CreateBook;
