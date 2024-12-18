import React, { useState } from "react";
import BookCard from "../components/BookCard";
import "./Browse.css";
import heartsEntwined from "../assets/image6.png";
import onceUponRainy from "../assets/image1.png";
import stayWithMe from "../assets/image2.png";
import ourSecretLove from "../assets/image3.png";

const booksData = [
  { id: 1, genre: "Genre 1", title: "Hearts Entwined", image: heartsEntwined, author: "Olivia Wilson" },
  { id: 2, genre: "Genre 1", title: "Once Upon a Rainy Day", image: onceUponRainy, author: "Ndemi Otieno" },
  { id: 3, genre: "Genre 1", title: "Stay With Me", image: stayWithMe, author: "Claudia Wilson" },
  { id: 4, genre: "Genre 1", title: "Our Secret Love", image: ourSecretLove, author: "Claudia Wilson" },
  // Add more books for Genre 2 and so on
];

function BrowsePage() {
  const [language, setLanguage] = useState("All");
  const [genre, setGenre] = useState("All");
  const [keywords, setKeywords] = useState("");

  // Filter Logic
  const filteredBooks = booksData.filter((book) => {
    return (
      (genre === "All" || book.genre === genre) &&
      book.title.toLowerCase().includes(keywords.toLowerCase())
    );
  });

  return (
    <div className="browse-page">
      {/* Top Search */}
      <div className="top-search">
        <input type="text" placeholder="Search a book by name" className="search-bar" />
        <button className="search-btn">🔍</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <h3>Find a book by</h3>
        <div className="filter-options">
          <div>
            <label>Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>All</option>
              <option>English</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label>Genre</label>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option>All</option>
              <option>Genre 1</option>
              <option>Genre 2</option>
            </select>
          </div>
          <div>
            <label>Keywords</label>
            <input
              type="text"
              placeholder="Type a Keyword"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
          <button className="filter-btn">Filter</button>
        </div>
      </div>

      {/* Book Recommendations */}
      <section>
        <h2>Recommendations</h2>
        <h4><i>Genre 1</i></h4>
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} image={book.image} title={book.title} author={book.author} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default BrowsePage;
