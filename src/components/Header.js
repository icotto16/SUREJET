import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>SUREJET</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/booking">Book a Jet</Link>
      </nav>
    </header>
  );
};

export default Header;
