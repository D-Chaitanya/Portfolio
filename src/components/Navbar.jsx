const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a href="#hero" className="navbar__logo">
        {/* <span className="navbar__logo-mark">DC</span>
        <span className="navbar__logo-text">Portfolio</span> */}
      </a>
      <nav className="navbar__nav">
        <ul className="navbar__links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
