import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/styles.css";

const categories = ["All", "Python", "Front-End", "Back-End"];

const allProjects = [
  {
    category: "Front-End",
    title: "freeCodeCamp's Responsive Web Design Projects",
    description:
      "The projects required to earn freeCodeCamp's Responsive Web Design certificate.",
    code: "https://github.com/briannemg/fcc-responsive-web-design",
    demo: "https://briannemg.github.io/fcc-responsive-web-design/", // optional
  },
  {
    category: "Front-End",
    title: "freeCodeCamp's JavaScript Algorithms and Data Structures Projects",
    code: "https://github.com/briannemg/fcc-javascript-algorithms",
    demo: "https://briannemg.github.io/fcc-javascript-algorithms",
  },
  {
    category: "Front-End",
    title: "freeCodeCamp Random Quote Machine",
    code: "https://github.com/briannemg/fcc-random-quote-machine",
    demo: "https://briannemg.github.io/fcc-random-quote-machine",
  },
  {
    category: "Front-End",
    title: "freeCodeCamp Markdown Previewer",
    code: "https://github.com/briannemg/fcc-markdown-previewer",
    demo: "https://briannemg.github.io/fcc-markdown-previewer",
  },
  {
    category: "Front-End",
    title: "freeCodeCamp Drum Machine",
    code: "https://github.com/briannemg/fcc-drum-machine",
    demo: "https://briannemg.github.io/fcc-drum-machine",
  },
  {
    category: "Front-End",
    title: "freeCodeCamp Calculator",
    code: "https://github.com/briannemg/fcc-calculator",
    demo: "https://briannemg.github.io/fcc-calculator",
  },
  {
    category: "Python",
    title: "Data Analysis Projects - NOT REAL",
    description:
      "Python projects demonstrating exploratory data analysis, visualization, and statistical insights.",
    code: "https://github.com/briannemg/data-analysis-projects",
    // no demo
  },
];

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
            className={`tab-button ${selectedCategory === cat ? "active" : ""}`}
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
              code={project.code}
              demo={project.demo}
            />
          ))
        ) : (
          <p>No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}
