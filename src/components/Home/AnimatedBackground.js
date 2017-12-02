import React from 'react';
import './AnimatedBackground.css';

export default function AnimatedBackground(props) {
  return (
    <div styleName={'gif-container'}>
      <img styleName={'gif'} src={props.gifurl} alt="Gif" />
    </div>
  );
} 
