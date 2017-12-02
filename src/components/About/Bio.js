import React from 'react';

import './Bio.css';

export default function Bio(props) {
  const fullBio = props.bio.text.map(bio => 
    <div styleName={'paragraph'}>
      <span styleName={'grey'}>&lt;</span>
      <span styleName={'blue'}>p</span>
      <span styleName={'grey'}>&gt;</span>
      <span>{bio}</span>
      <span styleName={'grey'}>&lt;</span>
      <span styleName={'blue'}>/</span>
      <span styleName={'blue'}>p</span>
      <span styleName={'grey'}>&gt;</span>
    </div>
  );
  
  return (
    <div styleName={'bio-container'}>
      <div styleName={'bio-title'}>
        <span styleName={'grey'}>&lt;</span>
        <span styleName={'blue'}>h2</span>
        <span styleName={'grey'}>&gt;</span>
        <span>Who Am I?</span>
        <span styleName={'grey'}>&lt;</span>
        <span styleName={'blue'}>/</span>
        <span styleName={'blue'}>h2</span>
        <span styleName={'grey'}>&gt;</span>
      </div>
      <div styleName={'bio-text'}>
        {fullBio}
      </div>
      <ul styleName={'contact-list'}>
        <li>mwhitcom@gmail.com</li>
        <li><a href={props.bio.github} rel="noopener noreferrer" target="_blank">Github</a></li>
        <li><a href={props.bio.linkedin} rel="noopener noreferrer" target="_blank">Linkedin</a></li>
      </ul>
    </div>
  );
}
