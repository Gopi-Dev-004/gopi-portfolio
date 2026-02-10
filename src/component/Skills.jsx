

import "../style/Skills.css";
import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="section skills">
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
