import React from "react";
import "../styles/styles.css";

export default function ProjectCard({ title, description, code, demo }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {demo && (
          <a
            href={demo}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo →
          </a>
        )}
        {code && (
          <a
            href={code}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}
