import { useState } from 'react';
import './Navbar.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToSection = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fi fi-rr-angle-right"></i>
      </button>
      <ul>
        <li><a onClick={() => scrollToSection('hero')}><i className="fi fi-rr-home"></i></a></li>
        <li><a onClick={() => scrollToSection('tools')}><i className="fi fi-rr-layers"></i></a></li>
        <li><a onClick={() => scrollToSection('projects')}><i className="fi fi-rr-folder"></i></a></li>
        <li><a onClick={() => scrollToSection('experience')}><i className="fi fi-rr-briefcase"></i></a></li>
        <li><a onClick={() => scrollToSection('contact')}><i className="fi fi-rr-envelope"></i></a></li>
      </ul>
      <div className="navbar-divider"></div>
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
