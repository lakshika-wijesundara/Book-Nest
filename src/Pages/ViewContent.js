



import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ViewContent.css";

function ViewContent() {
  const location = useLocation();
  const book = location.state?.book;

  if (!book) {
    return <p>No book selected to read.</p>;
  }

  const chapters = [
    {
      title: "Chapter 1: A Map in the Shadows",
      date: "Jan 10, 2024",
      content: "Deep in the attic of an old house, a mysterious map lay hidden, whispering secrets of a forgotten world.",
    },
    {
      title: "Chapter 2: The Call to Adventure",
      date: "Feb 14, 2024",
      content: "The map led young Henry to an enchanted forest, where an ancient voice beckoned him to explore.",
    },
    {
      title: "Chapter 3: The Rogue and the Scholar",
      date: "Mar 20, 2024",
      content: "Henry meets two companions on his journey—a cunning rogue and a wise scholar, each with their secrets.",
    },
    {
      title: "Chapter 4: Clues in the Dust",
      date: "Apr 17, 2024",
      content: "Together, they uncovered an ancient artifact buried in the sands of an abandoned temple.",
    },
    {
      title: "Chapter 5: Crossing into Danger",
      date: "May 22, 2024",
      content: "Their path crossed perilous canyons, with dark shadows hinting at unseen threats.",
    },
    {
      title: "Chapter 6: Trials of the Jungle",
      date: "Jun 12, 2024",
      content: "An enchanted jungle tested their courage with riddles and mystical creatures.",
    },
    {
      title: "Chapter 7: The Rival’s Pursuit",
      date: "Jul 24, 2024",
      content: "A rival group, equally determined, began pursuing them for the treasure the map promised.",
    },
    {
      title: "Chapter 8: Secrets of the Temple",
      date: "Aug 21, 2024",
      content: "In the heart of an ancient temple, the group faced puzzles that demanded both wit and bravery.",
    },
    {
      title: "Chapter 9: The Betrayal",
      date: "Sep 18, 2024",
      content: "Trust fractured as the rogue's hidden intentions came to light, putting the group in jeopardy.",
    },
    {
      title: "Chapter 10: Whispers of the Ancients",
      date: "Oct 16, 2024",
      content: "The voices of ancient guardians spoke, revealing the price of claiming the ultimate treasure.",
    },
    {
      title: "Chapter 11: The Descent into Darkness",
      date: "Nov 13, 2024",
      content: "The journey took them into deep caverns, filled with lurking dangers and echoes of the past.",
    },
    {
      title: "Chapter 12: Trapped in Time",
      date: "Dec 18, 2024",
      content: "The group stumbled upon a time-bending trap, experiencing flashes of the treasure's history.",
    },
    {
      title: "Chapter 13: The Final Puzzle",
      date: "Jan 15, 2025",
      content: "A final test awaited—a puzzle that would determine their worthiness to claim the treasure.",
    },
    {
      title: "Chapter 14: The Cradle’s Truth",
      date: "Jan 15, 2025",
      content: "Reaching the treasure's cradle, they learned a profound truth that changed their lives forever.",
    },
  ];
  
  return (
    <div className="read-page-container">
      <nav className="breadcrumb">Home / Browse / Book Details / Read</nav>

      <div className="read-header">
        <div className="read-book-image">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="read-book-info">
          <div className="title">
            <h1>{book.title}</h1>
            <div className="button-group">
            <button className="editcontent-button">Edit</button>
            <button className="deletebook-button">Delete Book</button>
          </div>
          </div>
          <p>
            <strong>Writer:</strong> {book.author}
          </p>
          <div className="read-book-stats">
            <span>⭐ {book.stats?.ratings || 0}</span>
            <span>💬 {book.stats?.comments || 0}</span>
            <span>📚 Parts: {chapters.length}</span>
            <span>⏱ {book.stats?.time || "N/A"}</span>
          </div>
        </div>
      </div>

      <div className="table-of-contents">
        <h2>Table of Content</h2>
        <ul>
          {chapters.map((chapter, index) => (
            <li key={index} className="chapter-item">
              <Link
                to="/writer-chapter-page"
                state={{ bookTitle: book.title, chapter }}
                className="chapter-link"
              >
                {chapter.title}
              </Link>
              <span className="chapter-date">{chapter.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ViewContent;
