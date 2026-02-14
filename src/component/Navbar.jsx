

import { useState, useEffect } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll spy logic
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu in mobile
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <a href="#home">
          <h2 className="logo">GOPI</h2>
        </a>
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li
            className={active === "home" ? "active" : ""}
            onClick={() => handleScroll("home")}
          >
            Home
          </li>

          <li
            className={active === "about" ? "active" : ""}
            onClick={() => handleScroll("about")}
          >
            About
          </li>

          <li
            className={active === "skills" ? "active" : ""}
            onClick={() => handleScroll("skills")}
          >
            Skills
          </li>

          <li
            className={active === "projects" ? "active" : ""}
            onClick={() => handleScroll("projects")}
          >
            Projects
          </li>

          <li
            className={active === "education" ? "active" : ""}
            onClick={() => handleScroll("education")}
          >
            Education
          </li>

          <li
            className={active === "contact" ? "active" : ""}
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
