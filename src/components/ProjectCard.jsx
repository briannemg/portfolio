import React from "react";
import "../styles/styles.css";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a
        href={link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}
