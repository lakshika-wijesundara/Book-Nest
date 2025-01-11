import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import BrowsePage from "./Pages/Browse";
import RegisterForm from "./Pages/RegisterForm";
import Login from "./Pages/Login";
import BookDetails from "./Pages/BookDetails";
import Write from "./Pages/Write";
import AddStory from "./Pages/AddStory";
import CreateBook from "./Pages/CreateBook";
import WriteBookDetails from "./Pages/WriteBookDetails";
import ViewContent from "./Pages/ViewContent";
import ChapterPage from "./components/ChapterPage";
import WriterChapterPage from "./components/WriterChapterPage";
import Read from "./Pages/Read";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        
        {/* Routes with Navbar */}
        <Route
          path="*"
          element={
            <div>
              {/* Navbar displayed for all routes except /register and /login */}
              <Navbar />
              <Routes>
                {/* Add Footer only for HomePage */}
                <Route
                  path="/homepage"
                  element={
                    <>
                      <HomePage />
                      <Footer />
                    </>
                  }
                />
                <Route path="/browse" element={<BrowsePage />} />
                <Route path="/bookdetails" element={<BookDetails />} />
                <Route path="/write" element={<Write />} />
                <Route path="/addstory" element={<AddStory />} />
                <Route path="/createbook" element={<CreateBook />} />
                <Route path="/read" element={<Read />} />
                <Route path="/writebookdetails" element={<WriteBookDetails />} />
                <Route path="/viewcontent" element={<ViewContent />} />
                <Route path="/chapter" element={<ChapterPage />} />
                <Route path="/writer-chapter-page" element={<WriterChapterPage />} />
                <Route path="/profile" element={<Profile />} />
                
                {/* Fallback route */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
