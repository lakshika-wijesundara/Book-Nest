import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import BrowsePage from "./Pages/Browse";
import RegisterForm from "./Pages/RegisterForm";
import Login from "./Pages/Login";
import BookDetails from "./Pages/BookDetails";
import Write from "./Pages/Write";
import Read from "./Pages/Read";
import AddStory from "./Pages/AddStory";
import CreateBook from "./Pages/CreateBook";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div>
              <Navbar />
              <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/browse" element={<BrowsePage />} />
                <Route path="/bookdetails" element={<BookDetails />} />
                <Route path="/write" element={<Write />} />
                <Route path="/addstory" element={<AddStory/>}/>
                <Route path="/createbook" element={<CreateBook/>}/>
                <Route path="/read" element={<Read />} />
                <Route path="*" element={<HomePage />} /> {/* Fallback Route */}
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
