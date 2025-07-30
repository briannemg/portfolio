import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      <section className="intro">
        <h2>Hello, I’m Brianne 👋</h2>
        <p>
          I'm an atmospheric scientist and budding scientific software developer
          with over 8 years of experience turning complex weather data into
          clear, actionable insights. I have specialized in forecast
          verification, numerical weather prediction, and automating scientific
          workflows using Python and high-performance computing.
        </p>
        <p>
          Passionate about collaboration and clean code, I thrive at the
          intersection of research and software, helping teams accelerate
          weather modeling projects and make data-driven decisions.
        </p>
        <p>
          I love exploring new software development skills and expanding my
          toolkit. Currently, I’m learning front-end development and honing my
          Python skills.
        </p>
      </section>

      <section className="personal-touch">
        <blockquote>
          “Data tells the story; I’m just here to write the code that brings it
          to life.” — Brianne’s guiding principle
        </blockquote>
      </section>
    </main>
  );
};

export default Home;
