import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/login";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
  FaFingerprint,
} from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";



const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Example authentication logic
    if (userId === "admin@gmail.com" && password === "secret123") {
      navigate("/home");
    } else {
      alert("Invalid User ID or Password");
    }
  };

  return (
    <Wrapper>
      <div className="login-container">
      <h3>Email: admin@gmail.com <br/> Password: secret123</h3>
        <h1>Login</h1>
        <p>
          By signing in you are agreeing to our <a href="#">Terms</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>

        {/* Tabs for login and register */}
        <div className="tabs">
          <button>Login</button>
          <button disabled>Register</button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <AiFillEye
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember password
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit">Login</button>
        </form>

        {/* Social Media Icons */}
        <div className="social-media">
          <FaFacebookF className="icon facebook" />
          <FaInstagram className="icon instagram" />
          <FaPinterestP className="icon pinterest" />
          <FaLinkedinIn className="icon linkedin" />
        </div>

        {/* Fingerprint icon for alternative login */}
        <FaFingerprint className="fingerprint" />
      </div>
    </Wrapper>
  );
};

export default LoginPage;
