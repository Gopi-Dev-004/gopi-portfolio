

import "../style/Home.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Home() {

  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="home"
      ref={ref}
      className={`section home  reveal  ${isVisible ? "active" : ""}`}
    >
      <div className="hero-container">

        {/* Left Side Text */}
        <div className="hero-text">
          <h1>Hi, I'm Gopi</h1>
          <h2>Full Stack Developer</h2>
          <p className="hero-subtitle">
            Passionate Java Full Stack Developer focused on building secure, scalable, and real-world applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="/resume/GopiJavaDevResume.pdf" target="_blank" className="btn secondary-btn">
              View Resume
            </a>

            {/* <a href="/resume/GopiJavaDevResume.pdf" download className="btn outline-btn">
              Download Resume
            </a> */}
          </div>

        </div>

        {/* Right Side Image */}
        <div className="hero-image">
          <img src="/image/code.jpg" alt="Gopi Profile" />
        </div>

      </div>
    </section>
  );
}

export default Home;
