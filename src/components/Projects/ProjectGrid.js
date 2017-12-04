import React, { Component } from 'react';
import './ProjectGrid.css';

import Data from '../../utils/Data.js';
import SingleProject from './SingleProject';

class ProjectGrid extends Component {
  render() {
    const projects = Data.projects.map(project => <SingleProject project={project} />);
    return (
      <div styleName="grid-container">
        {projects}
      </div>
    );
  }
}

export default ProjectGrid;
