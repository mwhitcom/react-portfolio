import React, { Component } from 'react';
import './Home.css';

import Data from '../../utils/Data';

import Navbar from '../Navigation/Navbar';
import AnimatedBackground from './AnimatedBackground';
import IntroText from './IntroText';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <IntroText />
        <AnimatedBackground gifurl={Data.gifurl} />
      </div>
    );
  }
}

export default Home;
