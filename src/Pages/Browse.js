import React from "react";
import "./Browse.css";
import { useNavigate } from "react-router-dom";
import heartsEntwined from "../assets/image6.png";
import onceUponRainy from "../assets/image1.png";
import stayWithMe from "../assets/image2.png";
import ourSecretLove from "../assets/image3.png";
import SearchIcon from "../assets/SearchIcon.png";

// Book data
const books = [
  {
    id: 1,
    genre: "Genre 1",
    title: "Hearts Entwined",
    author: "Olivia Silver",
    image: heartsEntwined,
    stats: { ratings: 4.5, comments: 22, time: "20 min" },
  },
  {
    id: 2,
    genre: "Genre 1",
    title: "Once Upon a Rainy Day",
    author: "Nderitu Otieno",
    image: onceUponRainy,
    stats: { ratings: 4.8, comments: 30, time: "25 min" },
  },
  {
    id: 3,
    genre: "Genre 1",
    title: "Stay With Me",
    author: "Claudia Wilson",
    image: stayWithMe,
    stats: { ratings: 4.6, comments: 18, time: "18 min" },
  },
  {
    id: 4,
    genre: "Genre 1",
    title: "Our Secret Love",
    author: "William Wilson",
    image: ourSecretLove,
    stats: { ratings: 4.4, comments: 15, time: "15 min" },
  },
];

// Reusable BookCard Component
const BookCard = ({ book, onClick }) => (
  <div className="book-card" onClick={() => onClick(book)}>
    <img src={book.image} alt={`Cover of ${book.title}`} className="book-image" />
    <h3 className="book-title">{book.title}</h3>
    <p className="book-author">by {book.author}</p>
    <div className="book-stats">
      <span>⭐ {book.stats.ratings}</span>
      <span>💬 {book.stats.comments}</span>
      <span>📚 Parts: 24</span>
      <span>⏱ {book.stats.time}</span>
    </div>
  </div>
);

function Browse() {
  const navigate = useNavigate();

  // Extract unique genres dynamically from the books array
  const genres = [...new Set(books.map((book) => book.genre))];

  const handleBookClick = (book) => {
    navigate(`/bookdetails`, { state: book });
  };

  return (
    <div className="browse-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home / Browse</span>
      </div>

      {/* Title */}
      <h1 className="browse-title">Explore Stories</h1>

     <div className="top-search">
            <input className="search-bar" type="text" placeholder="Search a book by name" />
            <button className="search-btn">
                        <img
                  src={SearchIcon}
                  alt="Search"
                  className="searchIcon"
                />
    
            </button>
        
      </div>

      {/* Filter Section */}
      <div className="filter-container">
        <div className="filter-group">
          <label>Language</label>
          <select>
            <option>All</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Genre</label>
          <select>
            <option>All</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Keywords</label>
          <input type="text" placeholder="Type a Keyword" />
        </div>
        <button className="filter-button">Filter</button>
      </div>
        <h1>Recomondations</h1>
      {/* Genre Sections */}
      {genres.map((genre) => (
        <div key={genre} className="genre-section">
          <h2>{genre}</h2>
          <div className="books-container">
            {books
              .filter((book) => book.genre === genre)
              .map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onClick={handleBookClick}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Browse;
