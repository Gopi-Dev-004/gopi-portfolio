

import "../style/About.css";
import useScrollReveal from "../hooks/useScrollReveal";
function About() {
  const { ref, isVisible } = useScrollReveal();

  return (

    <section
      id="about"
      ref={ref}
      className={`section about reveal reveal-right  ${isVisible ? "active" : ""}`}
    >
      <div className="about-container">

        {/* Left Side Text */}
        <div className="about-left">
          <h2 className="section-title">About Me</h2>

          <p>
            I am a Computer Science graduate with a strong interest in backend
            and full stack development. I am currently improving my skills in
            Java, Spring Boot, and frontend technologies by building real-world
            projects.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and I am
            looking for a fresher opportunity where I can grow as a software
            developer.
          </p>
        </div>

        {/* Right Side Highlight Box */}
        <div className="about-right">
          <div className="about-card">
            <h3>Quick Info</h3>
            <ul>
              <li>🎓 B.Sc Computer Science</li>
              <li>💻 Full Stack Developer</li>
              <li>🚀 Analytical Thinker & Problem Solver</li>
              <li>📍 Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
