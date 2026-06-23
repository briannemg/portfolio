import { profile } from "../data/profile";

function Header() {
  return (
    <header className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">{profile.tagline}</p>

        <h1>{profile.name}</h1>

        <p className="hero-description">{profile.description}</p>

        <div className="hero-buttons">
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
