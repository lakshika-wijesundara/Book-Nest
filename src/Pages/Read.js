import React from "react";
import { useLocation } from "react-router-dom";
import "./Read.css";

function Read() {
  const location = useLocation();
  const book = location.state?.book; // Access the passed book data

  if (!book) {
    return <p>No book selected to read.</p>;
  }

  const chapters = [
    { title: "Chapter 1: A Map in the Shadows", date: "Jan 10, 2024" },
    { title: "Chapter 2: The Call to Adventure", date: "Feb 14, 2024" },
    { title: "Chapter 3: The Rogue and the Scholar", date: "Mar 20, 2024" },
    { title: "Chapter 4: Clues in the Dust", date: "Apr 17, 2024" },
    { title: "Chapter 5: Crossing into Danger", date: "May 22, 2024" },
    { title: "Chapter 6: Trials of the Jungle", date: "Jun 12, 2024" },
    { title: "Chapter 7: The Rival’s Pursuit", date: "Jul 24, 2024" },
    { title: "Chapter 8: Secrets of the Temple", date: "Aug 21, 2024" },
    { title: "Chapter 9: The Betrayal", date: "Sep 18, 2024" },
    { title: "Chapter 10: Whispers of the Ancients", date: "Oct 16, 2024" },
    { title: "Chapter 11: The Descent into Darkness", date: "Nov 13, 2024" },
    { title: "Chapter 12: Trapped in Time", date: "Dec 18, 2024" },
    { title: "Chapter 13: The Final Puzzle", date: "Jan 15, 2025" },
    { title: "Chapter 14: The Cradle’s Truth", date: "Jan 15, 2025" },
  ];

  return (
    <div className="read-page-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        Home / Browse / Book Details / Read
      </nav>

      {/* Book Header */}
      <div className="read-header">
        <div className="read-book-image">
          <img src={book.image} alt={book.title} />
          
        </div>
        

        <div className="read-book-info">
          <h1>{book.title}</h1>
          <button
            className="add-to-cart-button-read"
            onClick={() => console.log("Add to Library clicked!")}
          >
            Add to Library
          </button>
          <p>
            <strong>Writer:</strong> {book.author}
          </p>
          <div className="read-book-stats">
            <span>⭐ {book.stats?.ratings || 0}</span>
            <span>💬 {book.stats?.comments || 0}</span>
            <span>📚 Parts: 24</span>
            <span>⏱ {book.stats?.time || "N/A"}</span>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="table-of-contents">
        <h2>Table of Content</h2>
        <ul>
          {chapters.map((chapter, index) => (
            <li key={index} className="chapter-item">
              <span>{chapter.title}</span>
              <span className="chapter-date">{chapter.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Read;
