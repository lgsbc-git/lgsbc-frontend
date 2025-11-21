// src/components/Sidebar.js
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

import logoLight from "../assets/primary/lgstechlogo-withoutbg-gradientcolor.png";
import logoDark from "../assets/primary/lgstechlogo-withoutbg-bw.png";

import ScrollToTop from "./ScrollToTop";

const Sidebar = ({ darkMode }) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [useDarkLogo, setUseDarkLogo] = useState(false);
  const [useDarkText, setUseDarkText] = useState(false); // NEW → sidebar links color

  const lastScrollY = useRef(0);

  // -------- 1) SHOW LOGO ON SCROLL DOWN AFTER 500px / HIDE IMMEDIATELY ON SCROLL UP --------
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // scrolling up → hide immediately
      if (currentY < lastScrollY.current) {
        setLogoVisible(false);
      } else {
        // scrolling down → show only after 500px
        if (currentY > 500) setLogoVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -------- 2) Detect section background brightness (logo + text color switching) --------
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(entry.target).backgroundColor;
            const rgb = bgColor.match(/\d+/g);

            if (rgb) {
              const [r, g, b] = rgb.map(Number);

              // perceived brightness formula
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;

              const isDark = brightness < 130;

              setUseDarkLogo(isDark);     // white logo
              setUseDarkText(isDark);     // white links
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sidebarTheme = darkMode ? "sidebar-dark" : "sidebar-light";

  return (
    <div className={`sidebar ${sidebarTheme} ${useDarkText ? "sidebar-text-dark" : "sidebar-text-light"}`}>
      
      <div className={`sidebar_logo-wrapper ${logoVisible ? "show-logo" : "hide-logo"}`}>
        <Link to="/">
          <img
            src={logoLight}
            alt="Light Logo"
            className={`sidebar_logo ${useDarkLogo ? "hidden-logo" : "visible-logo"}`}
          />

          <img
            src={logoDark}
            alt="Dark Logo"
            className={`sidebar_logo ${useDarkLogo ? "visible-logo" : "hidden-logo"}`}
          />
        </Link>
      </div>

      <nav className="sidebar-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
          <span>LINKEDIN</span>
        </a>

        <Link to="/blogs" className="sidebar-link">
          <span>BLOGS</span>
        </Link>
      </nav>

      <div className="scroll-top" onClick={scrollToTop}>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Sidebar;
