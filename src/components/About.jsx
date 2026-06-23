import { profile } from "../data/profile";

function About() {
  return (
    <section className="about" id="about">
      <p className="eyebrow">Approach</p>
      <h2>{profile.aboutTitle}</h2>

      <p>{profile.aboutDescription}</p>
    </section>
  );
}

export default About;
