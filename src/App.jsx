import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

function HomePage() {
  const projects = [
    {
      title: "Example Title",
      description:
        "Example description sentence describing the project and what it does.",
      link: "https://github.com/yourusername/example-project",
    },
    // Add more projects here!
  ];

  // Fix <p> below to something that actually makes sense for me
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

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
