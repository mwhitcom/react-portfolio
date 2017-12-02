import React, { Component } from 'react';
import './About.css';

import Data from '../../utils/Data';

import Navbar from '../Navigation/Navbar';
import Bio from './Bio';
import Skills from './Skills';

class About extends Component {
  render() {
    return (
      <div styleName={'about-page'}>
        <Navbar />
        <Bio bio={Data.bio} />
        <Skills skills={Data.skills} />
      </div>
    );
  }
}

export default About;
