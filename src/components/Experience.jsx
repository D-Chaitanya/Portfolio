const responsibilities = [
  'React Native development',
  'REST API integrations',
  'Zustand state management',
  'Reusable components',
  'React.js admin portal contributions',
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__header">
        <span className="section__number">03</span>
        <h2 className="section__title">Experience</h2>
      </div>
      <article className="experience-card glass-card">
        <div className="experience-card__timeline">
          <span className="experience-card__dot" />
          <span className="experience-card__line" />
        </div>
        <div className="experience-card__body">
          <div className="experience-card__header">
            <h3 className="experience-card__role">Frontend Developer</h3>
            <time className="experience-card__date" dateTime="2024-07">
              July 2024 – Present
            </time>
          </div>
          <ul className="experience-card__list">
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Experience
