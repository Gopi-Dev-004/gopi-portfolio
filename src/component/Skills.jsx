import "../style/Skills.css";

function Skills() {
  return (
    <section className="section skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Java, Spring Boot, REST API</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>MySQL</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, Postman</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
