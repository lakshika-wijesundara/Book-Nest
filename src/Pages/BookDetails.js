import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookDetails.css";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state;

  if (!book) {
    return <p>No book data found.</p>;
  }

  const { ratings = 0, comments = 0, time = "N/A" } = book.stats || {};

  return (
    <div className="book-details-container">
      {/* Book Cover Image */}
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" />
      </div>

      {/* Book Information */}
      <div className="book-info">
        <label>
          <strong>Book Title:</strong>
          <input type="text" value={book.title} readOnly />
        </label>
        <label>
          <strong>Writer:</strong>
          <input type="text" value={book.author} readOnly />
        </label>
        <label>
  <strong>Book Introduction:</strong>
  <textarea value="Amelia Hayes, a driven journalist, and Ethan Carter, a reclusive tech mogul, share a love so intense yet shrouded in secrecy. In a world where ambition and loyalty clash, their bond is tested by hidden truths and impossible choices. Will their secret love survive the forces trying to tear them apart?" readOnly />
</label>

        <label>
          <strong>Genre:</strong>
          <input type="text" value={book.genre} readOnly />
        </label>
        <label>
          <strong>Keywords:</strong>
          <input type="text" value="#Love #CoupleStory" readOnly />
        </label>
        <label>
          <strong>Language:</strong>
          <input type="text" value="English" readOnly />
        </label>

        {/* Book Stats */}
        <div className="book-stats">
          <span>⭐ {ratings}</span>
          <span>💬 {comments}</span>
          <span>📚 Parts: 24</span>
          <span>⏱ {time}</span>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button
            className="add-to-cart-button"
            onClick={() => console.log("Add to Library clicked!")}
          >
            Add to Library
          </button>
          <button
            className="read-now-button"
            onClick={() => navigate("/read", { state: { book } })}
          >
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
