import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="eyebrow">Core Skills</p>
      <h2>Technical Toolkit</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
