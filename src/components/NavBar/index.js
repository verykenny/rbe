import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;