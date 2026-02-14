

import "../style/Projects.css";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import useScrollReveal from "../hooks/useScrollReveal";

function Projects() {

  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={`section projects reveal reveal-right ${isVisible ? "active" : ""}`}
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (

          <ProjectCard key={project.id} project={project} />

        ))}
      </div>
    </section>
  );
}

export default Projects;


