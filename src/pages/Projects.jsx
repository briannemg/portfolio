import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/styles.css";

const allProjects = [
  {
    category: "Python",
    title: "Python Project 1",
    description: "A cool Python project about data analysis.",
    link: "https://github.com/briannemg/python-project-1",
  },
  {
    category: "Front-End",
    title: "Responsive Portfolio",
    description: "A portfolio website built with React and CSS.",
    link: "https://github.com/briannemg/responsive-portfolio",
  },
  {
    category: "Back-End",
    title: "API Server",
    description: "REST API built with Node.js and Express.",
    link: "https://github.com/briannemg/api-server",
  },
  // Add your real projects here
];

const categories = ["All", "Python", "Front-End", "Back-End"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-button ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.length ? (
          filteredProjects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))
        ) : (
          <p>No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}
