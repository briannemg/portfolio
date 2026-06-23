import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>Built by {profile.name}</p>

      <div className="footer-links">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
