function Portfolio() {
  const projects = [
    { title: 'Trivia Game Project', link: 'https://dchica25.github.io/Trivia-game-project/', repo: 'https://github.com/Dchica25/Trivia-game-project' },
    // Add more projects if needed
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <div style={{ marginBottom: '10px' }}>
            <a href={project.link} target="_blank" rel="noreferrer" style={{ marginRight: '20px' }}>
              Deployed App
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
