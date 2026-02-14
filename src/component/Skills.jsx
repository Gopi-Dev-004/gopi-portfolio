

import "../style/Skills.css";
import { skills } from "../data/skills";
import SkillCard from "./SkillCard";
import useScrollReveal from "../hooks/useScrollReveal";

function Skills() {

  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`section skills reveal reveal-left ${isVisible ? "active" : ""}`}
    >
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;


