import React from 'react';
import Typist from 'react-typist';
import './IntroText.css';

export default function IntroText() {
  return (
    <div styleName={'intro-text-container'}>
      <Typist>
        <p styleName={'intro-text'}>> Hello, I am a Front-End Web Developer.</p>
        <p styleName={'intro-text'}>> I Love to Code.</p>
      </Typist>
    </div>
  );
}
