function Nav() {
  const basePath = "/portfolio/";

  return (
    <nav className="nav" aria-label="Portfolio navigation">
      <a href={`${basePath}#top`}>Home</a>
      <a href={`${basePath}#about`}>About</a>
      <a href={`${basePath}#skills`}>Skills</a>
      <a href={`${basePath}#projects`}>Projects</a>
      <a href={`${basePath}#contact`}>Contact</a>
    </nav>
  );
}

export default Nav;
