import React from "react";
import "./Login.css";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="forgot-password">
            <a href="#forgot">Forget Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-login">
          <p>Login with Others</p>
          <div className="social-icons">
            <button className="google-button">G</button>
            <button className="facebook-button">f</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
