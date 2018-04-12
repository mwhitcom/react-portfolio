import React, { Component } from 'react';
import Modal from 'react-modal';
import './ProjectGrid.css';

import Data from '../../utils/Data.js';
import SingleProject from './SingleProject';
import ProjectModal from './ProjectModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    borderRadius: '0px',
    border: 'none',
    backgroundColor: '#000',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

class ProjectGrid extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      filter: ''
    };
  }

  openModal = (event) => {
    this.setState({ modalIsOpen: true });
    this.filterData(event.target.id);
  }

  filterData = (type) => {
    const [filter] = Data.projects.filter(project => project.name === type);
    this.setState({ filter });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const projects = Data.projects.map(project => <SingleProject project={project} openModal={this.openModal} />);
    return (
      <div styleName="grid-container">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Project Modal"
        >
          <ProjectModal closeModal={this.closeModal} project={this.state.filter} />
        </Modal>
        {projects}
      </div>
    );
  }
}

export default ProjectGrid;
