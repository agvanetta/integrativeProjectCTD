import React from 'react';
import '../styles/header.css';
import '../styles/customProperties.css';
import NavBar from './NavBar';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
