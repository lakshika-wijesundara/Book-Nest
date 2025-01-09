import React from "react";
import "./BookCard.css";

function BookCard({ image, title, author }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-card-image" />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default BookCard;
