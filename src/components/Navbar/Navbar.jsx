import { useState } from 'react';
import './Navbar.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToSection = (id) => {
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
        <li><a onClick={() => scrollToSection('projects')}><i className="fi fi-rr-folder"></i></a></li>
        <li><a onClick={() => scrollToSection('experience')}><i className="fi fi-rr-shopping-bag"></i></a></li>
        <li><a onClick={() => scrollToSection('tools')}><i className="fi fi-rr-settings"></i></a></li>
        <li><a onClick={() => scrollToSection('contact')}><i className="fi fi-rr-edit"></i></a></li>
      </ul>
      <div className="navbar-divider"></div>
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;
