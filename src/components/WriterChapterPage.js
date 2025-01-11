import React from "react";
import { useLocation } from "react-router-dom";
import "./WriterChapterPage.css";

function WriterChapterPage() {
  const location = useLocation();
  const { bookTitle, chapter, role, ratings, comments, time } = location.state || {}; // Include `ratings`, `comments`, `time` in state

  if (!chapter) {
    return <p>No chapter data available.</p>;
  }

  const handleEdit = () => {
    console.log("Edit button clicked");
    // Logic for editing can be implemented here
  };

  return (
    <div className="chapter-page-container">
      <nav className="breadcrumb">
        Home / {role === "writer" ? "Write" : "Read"} / {bookTitle} / {chapter.title}
      </nav>

      <div className="chapter-content">
        <h1>{chapter.title}</h1>
        <p>
          Deep within the whispering woods, where the trees seemed to hum a happy tune, Sparkle the squirrel woke up to a glorious sunny morning. Today wasn’t just any day—it was the Great Acorn Hunt! All the animals of the forest gathered to collect magical acorns hidden by the wise old owl, who claimed these acorns could grant one special wish. Sparkle, with her bushy tail and bright eyes full of excitement, packed her tiny satchel and hopped through the golden leaves. Along the way, she made new friends: Twinkle the rabbit, who could leap as high as the clouds, and Rusty the raccoon, who always carried his lucky feather. Together, they set out to solve the owl’s riddles, dodge the playful pranks of the tricky fox, and uncover the secrets of the magical woods. Little did they know, the greatest treasure wasn’t the acorn at all—it was the adventure they shared along the way.
        </p>

      
          <button className="edit-button" onClick={handleEdit}>
            ✏️ Edit
          </button>
      
        <div className="book-stats">
          <span>⭐ {ratings}</span>
          <span>💬 {comments}</span>
          <span>📚 Parts: 24</span>
          <span>⏱ {time}</span>
        </div>
      </div>
    </div>
  );
}

export default WriterChapterPage;
