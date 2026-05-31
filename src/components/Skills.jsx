const skills = [
  'React Native',
  'React.js',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Zustand',
  'REST APIs',
  'Axios',
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__header">
        <span className="section__number">02</span>
        <h2 className="section__title">Skills</h2>
      </div>
      <ul className="skills-grid">
        {skills.map((skill) => (
          <li key={skill} className="skills-grid__item">
            <span className="skills-grid__dot" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
