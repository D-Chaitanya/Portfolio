const projects = [
  {
    title: 'Mobile Application',
    icon: '📱',
    description: 'Cross-platform mobile app with modern architecture and state management.',
    tags: ['React Native', 'TypeScript', 'REST APIs', 'Zustand'],
  },
  {
    title: 'Internal Admin Portal',
    icon: '🖥️',
    description: 'Web-based admin dashboard for internal operations and data management.',
    tags: ['React.js', 'API Integration', 'UI Development', 'Bug Fixes'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__header">
        <span className="section__number">04</span>
        <h2 className="section__title">Project Highlights</h2>
      </div>
      <div className="projects-grid">
        {projects.map(({ title, icon, description, tags }) => (
          <article key={title} className="project-card glass-card">
            <div className="project-card__glow" aria-hidden="true" />
            <div className="project-card__icon" aria-hidden="true">{icon}</div>
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__desc">{description}</p>
            <ul className="project-card__tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
