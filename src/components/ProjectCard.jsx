function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image && (
        <div className="project-image-wrapper">
          <a
            href={`${import.meta.env.BASE_URL}${project.image.replace("/", "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${import.meta.env.BASE_URL}${project.image.replace("/", "")}`}
              alt={project.title}
              className="project-image"
            />

            <div className="image-overlay">View Full Preview ↗</div>
          </a>
        </div>
      )}
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
