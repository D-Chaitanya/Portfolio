function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <div className="hero-section__badge">
            <span className="hero-section__dot" />
            Open to opportunities
          </div>

          <p className="hero-section__greeting">Hello, I&apos;m</p>
          <h1 className="hero-section__name">
            Divya Chaitanya <span className="gradient-text">Gurram</span>
          </h1>
          <h2 className="hero-section__title">Frontend Developer</h2>
          <p className="hero-section__subtitle">
            <span className="hero-section__pill">React Native</span>
            <span className="hero-section__pill">React.js</span>
          </p>
          <p className="hero-section__description">
            Nearly 2 years of experience building cross-platform mobile applications and internal admin portals, with experience using AI tools to improve development and solve problems faster.
          </p>

          <div className="hero-section__actions">
            <a href="#contact" className="btn btn--primary">
              Get in Touch
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a href="/resume.docx" download className="btn btn--secondary">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-section__visual" aria-hidden="true">
          <div className="hero-section__illustration">
            <div className="hero-section__avatar">👨‍💻</div>
            <span className="hero-section__float hero-section__float--1">⚛️</span>
            <span className="hero-section__float hero-section__float--2">JS</span>
            <span className="hero-section__float hero-section__float--3">TS</span>
            <span className="hero-section__float hero-section__float--4">{'{ }'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
