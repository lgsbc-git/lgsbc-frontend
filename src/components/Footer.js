import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/primary/lgstech-whitelogo.png";

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
      const backendURL = process.env.REACT_APP_BACKEND_URL;

      const res = await fetch(`${backendURL}/subscribe`, {
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

      {/* TOP FOOTER CONTENT */}
      <div className="footer-content">

        {/* LEFT SECTION */}
        <div className="footer-brand">
          <img src={logo} alt="LGS Tech Logo" className="footer-logo-img" />

          <p className="footer-brand-text">
            At LSGTech, We Believe Technology Should Simplify Complexity <br />
            And Drive Growth Not Slow It Down.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a><Link to="/about">About Us</Link></a>
          <a><Link to="/contact">Contact Us</Link></a>
          <a><Link to="/services">Our Services</Link></a>
          <a><Link to="/blogs">Blog</Link></a>
          <a><Link to="/stories">Stories</Link></a>
        </div>

        {/* SUPPORT */}
        <div className="footer-links">
          <h4>Support</h4>
          <a><Link to="/help">Help Centre</Link></a>
          <a><Link to="/terms">Term & Condition</Link></a>
          <a><Link to="/privacy">Privacy Policy</Link></a>
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

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom-bar">
        Copyright © 2025 LGS Tech | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;
