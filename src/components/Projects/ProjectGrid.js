import React, { Component } from 'react';
import Modal from 'react-modal';
import './ProjectGrid.css';

import Data from '../../utils/Data.js';
import SingleProject from './SingleProject';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

class ProjectGrid extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
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
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        {projects}
      </div>
    );
  }
}

export default ProjectGrid;
