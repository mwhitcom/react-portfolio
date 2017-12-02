import React, { Component } from 'react';

import Navbar from '../Navigation/Navbar';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div styleName={'resume-page'}>
        <Navbar />
        <object data="assets/MattWhitcombResume2017.pdf" width="100%" height="100%" type='application/pdf'>
          <p>Sorry, the PDF could not be displayed</p>
        </object>
      </div>
    );
  }
}

export default Resume;
