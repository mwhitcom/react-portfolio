import React from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <div styleName={'navbar-container'}>
      <h1 styleName={'header-title'}><Link to="/">MATT WHITCOMB</Link></h1>
      <ul styleName={'link-list'}>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/resume">RESUME</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
      </ul>
    </div>  
  );
}
