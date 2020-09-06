import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return <nav className="navbar">
    <ul className="menu">
      <li><Link to="/">About</Link></li>
      <li><Link to="/showcase">Showcase</Link></li>
      <li><Link to="/profiles">Profiles</Link></li>
    </ul>
  </nav>;
}

export default Navbar;
