import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ChapterPage.css";

function ChapterPage() {
  const location = useLocation();
  const { bookTitle, chapter, role } = location.state || {}; // Include `role` in state
  const [voteCount, setVoteCount] = useState(0);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false); // Speaker toggle state

  const handleVote = () => setVoteCount(voteCount + 1);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment(""); // Reset the comment input
    }
  };

  const handleSpeakerToggle = () => {
    setIsSpeakerOn((prevState) => !prevState);
  };

  useEffect(() => {
    // Ensure speech synthesis only happens when `isSpeakerOn` is true
    if (isSpeakerOn) {
      const utterance = new SpeechSynthesisUtterance(chapter?.content || "No content available.");
      window.speechSynthesis.speak(utterance);

      return () => {
        window.speechSynthesis.cancel(); // Stop speaking when component unmounts or `isSpeakerOn` changes
      };
    }
  }, [isSpeakerOn, chapter?.content]); // Always run based on dependencies

  if (!chapter) {
    return <p>No chapter data available.</p>;
  }

  return (
    <div className="chapter-page-container">
      <nav className="breadcrumb">
        Home / {role === "writer" ? "Write" : "Read"} / {bookTitle} / {chapter.title}
      </nav>

      <div className="chapter-content">
        <div className="chapter-header">
          <h1>{chapter.title}</h1>
          <button
            className={`speak-button ${isSpeakerOn ? "active" : ""}`}
            onClick={handleSpeakerToggle}
          >
            🔊 {isSpeakerOn ? "Speaker On" : "Speaker Off"}
          </button>
        </div>
        <p>
          
            Deep within the whispering woods, where the trees seemed to 
            hum a happy tune, Sparkle the squirrel woke up to a glorious sunny morning.
           Today wasn’t just any day—it was the Great Acorn Hunt! All the 
           animals of the forest gathered to collect magical acorns hidden by the wise old owl, 
           who claimed these acorns could grant one special wish. Sparkle, 
           with her bushy tail and bright eyes full of excitement, 
           packed her tiny satchel and hopped through the golden leaves. Along the way, she made new friends: Twinkle the rabbit,
            who could leap as high as the clouds, and Rusty the raccoon, who always carried his lucky feather. Together,
             they set out to solve the owl’s riddles, dodge the playful pranks of the tricky fox,
              and uncover the secrets of the magical woods. Little did they know, 
              the greatest treasure wasn’t the acorn at all—it was the adventure they shared along the way.
        </p>

        {role !== "writer" && ( // Show interaction only for readers
          <div className="interaction-section">
            <button className="vote-button" onClick={handleVote}>
              👍 Vote {voteCount}
            </button>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
              />
              <button type="submit">Submit Comment</button>
            </form>
            {commentsList.length > 0 && (
              <div className="comments-section">
                <h3>Comments</h3>
                <ul>
                  {commentsList.map((com, index) => (
                    <li key={index}>{com}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChapterPage;
