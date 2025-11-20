import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

// Logos
import homeLogo from "../assets/primary/lgstech-whitelogo.png";


import lightLogo from "../assets/primary/LGS Tech Logo Gradient_croppedv2.jpg";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closingMenu, setClosingMenu] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrollY(currentY);

      // Shrink header after 50px scroll
      setIsShrunk(currentY > 50);

      // Hide only after scrolling down past 600px
      if (currentY > 600 && currentY > scrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (isMenuOpen) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setClosingMenu(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setClosingMenu(false);
      }, 400);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleLinkClick = () => {
    setClosingMenu(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setClosingMenu(false);
    }, 400);
  };

  return (
    <header
      className={`header 
        ${isHome ? "home-header" : "glass-header"} 
        ${isShrunk ? "shrink" : ""} 
        ${isVisible ? "slide-down" : "slide-up"}
      `}
    >
      <div className="logo">
        <Link to="/" className="logo-link">
          {/* DIFFERENT LOGO BASED ON PAGE */}
          <img
            src={isHome ? homeLogo : lightLogo}
            alt="LGS Tech Logo"
            className={`logo-icon ${isHome ? "full-logo" : "alt-logo"}`}
          />
        </Link>
      </div>

      <div className="nav-container">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {(isMenuOpen || closingMenu) && (
        <div className={`menu-overlay ${closingMenu ? "closing" : "opening"}`}>
          <div className="close-icon" onClick={toggleMenu}>&times;</div>

          <ul className="overlay-links">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Our Services</Link></li>
            <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
