function Navigation({ currentSection, setCurrentSection }) {
  const sections = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={currentSection === section ? 'active' : ''}
            onClick={() => setCurrentSection(section)}
          >
            {section.replace(/([A-Z])/g, ' $1').trim()}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
