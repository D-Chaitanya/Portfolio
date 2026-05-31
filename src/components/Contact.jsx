function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__header section__header--center">
        <span className="section__number">05</span>
        <h2 className="section__title">Get In Touch</h2>
      </div>

      <div className="contact-card glass-card">
        <p className="contact__text">
          Interested in working together? I&apos;d love to hear from you.
          Download my resume or reach out to connect.
        </p>
        <div className="contact__actions">
          <a href="/resume.docx" download className="btn btn--primary">
            Download Resume
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>
         &copy; {new Date().getFullYear()} Divya
          Chaitanya Gurram
        </p>
      </footer>
    </section>
  )
}

export default Contact
