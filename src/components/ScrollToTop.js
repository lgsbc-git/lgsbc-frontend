import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // 🔥 Scroll to TOP when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // prevents mid-scroll glitches
    });
  }, [pathname]);

  // 🔥 Show button when scrolling down
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Button click scroll
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      className={`scroll-to-top left ${visible ? "show" : ""}`}
      onClick={handleClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

export default ScrollToTop;
