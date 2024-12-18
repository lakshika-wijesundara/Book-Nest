import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'; 
import HomePage from './Pages/HomePage'; 
import Browse from './Pages/Browse'; 
import RegisterForm from './Pages/RegisterForm'; 
import Login from './Pages/Login'; 
function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route
          path="/register"
          element={
            <div>
              <RegisterForm />
            </div>
          }
        />
         <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        {}
        <Route
          path="*"
          element={
            <div>
              <Navbar />
              <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/browse" element={<Browse />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
