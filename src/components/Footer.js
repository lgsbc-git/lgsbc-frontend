import React, { useState } from "react";
import API_BASE_URL from "../config/api";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/primary/lgs_logo_white.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.success || data.error);
      setEmail("");

      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      setMessage("Failed to subscribe. Try again later.");
      setTimeout(() => setMessage(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="footer-new">
      {/* TOP CONTENT */}
      <div className="footer-content">
        {/* LEFT SIDE */}
        <div className="footer-brand">
          <img src={logo} alt="LGS Tech Logo" className="footer-logo-img" />

          <p className="footer-brand-text">
            At LGS, We Believe Technology Should Simplify Complexity <br />
            And Drive Growth Not Slow It Down.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/blogs">Blog</Link>
          <Link to="/stories">Stories</Link>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>

          <Link to="/help">Help Centre</Link>
          <Link to="/terms">Terms & Condition</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Subscribe To Our Newsletter</h4>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="newsletter-input"
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubscribe} disabled={isLoading}>
              {isLoading ? <div className="loader"></div> : <>&#10148;</>}
            </button>
          </div>

          {message && (
            <p
              className={`newsletter-msg ${
                message.toLowerCase().includes("thank") ||
                message.toLowerCase().includes("already")
                  ? "success"
                  : "error"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom-bar">
        Copyright © 2025 LGS | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
