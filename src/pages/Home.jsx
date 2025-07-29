import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      <section className="intro">
        <h2>Hello, I’m Brianne 👋</h2>
        <p>
          Atmospheric scientist turned budding software developer, passionate
          about building clean, effective code and using data to make sense of
          the weather — and life.
        </p>
      </section>

      <section className="navigation-links">
        <h3>Explore my site:</h3>
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </section>

      <section className="featured-projects">
        <h3>Featured Projects</h3>
        <ul>
          <li>
            <a
              href="https://github.com/briannemg/example-project"
              target="_blank"
              rel="noreferrer"
            >
              Example Project — A demo of React magic
            </a>
          </li>
          <li>
            <a
              href="https://github.com/briannemg/weather-model-verification"
              target="_blank"
              rel="noreferrer"
            >
              Weather Model Verification Toolkit
            </a>
          </li>
        </ul>
      </section>

      <section className="personal-touch">
        <blockquote>
          “The best way to predict the future is to build it.” — Brianne’s
          unofficial motto
        </blockquote>
      </section>
    </main>
  );
};

export default Home;
