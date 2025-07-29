import React from "react";
import "./styles/styles.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  const projects = [
    {
      title: "Example Title",
      description:
        "Example description sentence describing the project and what it does.",
      link: "https://github.com/yourusername/example-project",
    },
    // Add more projects here!
  ];

  // fix the <p> below...I'm not dangerously good at React. But I like the idea of describing myself here
  return (
    <>
      <header>
        <h1>✨ Brianne's Developer Portfolio ✨</h1>
        <p>Creative, passionate, and dangerously good at React.</p>
      </header>
      <main className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </main>
    </>
  );
}

export default App;
