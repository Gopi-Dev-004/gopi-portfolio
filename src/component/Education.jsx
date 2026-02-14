

import "../style/Education.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Education() {

  const { ref, isVisible } = useScrollReveal();

  return (
    
    <section
      id="education"
      ref={ref}
      className={`section education reveal reveal-left ${isVisible ? "active" : ""}`}
    >
      <h2 className="section-title">Education</h2>

      <div className="edu-item">
        <h3>Bachelor of Computer Science</h3>
        <p>Sri Vidya Mandir Arts and Science College</p>
        <p>Year: 2022 – 2025</p>
        <p>CGPA: 7.8</p>
      </div>
    </section>
  );
}

export default Education;

