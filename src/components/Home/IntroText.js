import React from 'react';
import Typist from 'react-typist';
import './IntroText.css';

export default function IntroText() {
  return (
    <div styleName={'intro-text-container'}>
      <Typist>
        <p styleName={'intro-text'}>> Hello, I am a front-end web developer.</p>
        <p styleName={'intro-text'}>> I love to code.</p>
      </Typist>
    </div>
  );
}
