import { featuredProjects, learningProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Featured Projects</h2>
        <p>
          A collection of data, software, and scientific computing projects
          focused on practical problem-solving and clear technical
          communication.
        </p>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="learning-projects">
        <h2>Frontend Practice</h2>
        <p>
          Smaller projects focused on strengthening HTML, CSS, responsive
          design, and frontend fundamentals.
        </p>

        <div className="project-grid compact">
          {learningProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
