function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}

        <h3>{project.title}</h3>
      </div>

      <p className="project-description">{project.description}</p>

      {project.highlights && (
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      <div className="tech-list">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
