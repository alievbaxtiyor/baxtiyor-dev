import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`navbar ${expanded ? 'expanded' : ''}`}>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fi fi-rr-angle-right"></i>
      </button>
      <ul>
        <li><a href="#home"><i className="fi fi-rr-home"></i></a></li>
        <li><a href="#files"><i className="fi fi-rr-folder"></i></a></li>
        <li><a href="#bag"><i className="fi fi-rr-shopping-bag"></i></a></li>
        <li><a href="#settings"><i className="fi fi-rr-settings"></i></a></li>
        <li><a href="#edit"><i className="fi fi-rr-edit"></i></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
