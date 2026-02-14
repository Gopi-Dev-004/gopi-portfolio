

function ProjectCard({ project }) {
  
  return (

    <div className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech-list">
        {project.tech.map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank">GitHub</a>
        {
          project.demo && (

            <a href={project.demo} target="_blank">Live Demo</a>
          )}
      </div>
    </div>
  );
}

export default ProjectCard;
