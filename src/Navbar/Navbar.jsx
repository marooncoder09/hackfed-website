import React, { useState, useEffect } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#tracks">Tracks</a></li>
        <li><a href="#humans">Humans</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
