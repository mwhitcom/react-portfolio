import React, { Component } from 'react';
import './Projects.css';

import Navbar from '../Navigation/Navbar';
import ProjectGrid from './ProjectGrid';

class Projects extends Component {
  render() {
    return (
      <div styleName={'projects-page'}>
        <Navbar />
        <ProjectGrid />
      </div>
    );
  }
}

export default Projects;
