import React, { Component } from 'react';
import './Home.css';

import Filler from '../../utils/FillerData';

import Navbar from '../Navigation/Navbar';
import AnimatedBackground from './AnimatedBackground';
import IntroText from './IntroText';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <IntroText />
        <AnimatedBackground gifurl={Filler.gifurl} />
      </div>
    );
  }
}

export default Home;
