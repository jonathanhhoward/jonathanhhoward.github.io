import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar--shadow');
    } else {
      navbar.classList.remove('navbar--shadow');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/showcase">Showcase</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
