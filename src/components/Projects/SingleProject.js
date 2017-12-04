import React from 'react';
import './SingleProject.css';

export default function SingleProject(props) {
  const techLength = props.project.tech.length - 1;  
  const techList = props.project.tech.map((tech, index) =>
    <p>
      <span styleName={'orange'}>'{tech}'</span>
      <span>{index === techLength ? '' : ', '}</span>
    </p>
  );
  
  return (
    <div styleName={'single-container'}>
      <div styleName={'image-container'}>
        <img styleName={'image'} src={props.project.image} alt={props.project.name} />
      </div>
      <div styleName={'info-container'}>
        <p>
          <span styleName={'light-blue'}>let </span>
          <span styleName={'blue'}>{props.project.name} </span>
          <span>= &#123;</span>
        </p>
        <p styleName={'tab'}>
          <span styleName={'blue'}>link: </span>
          <span><a styleName={'project-link'} href={props.project.link} target="_blank">{props.project.link}</a></span>
          <span>,</span>
        </p>
        <p styleName={'tab'}>
          <span styleName={'blue'}>about: </span>
          <span styleName={'orange'}>'{props.project.about}'</span>
          <span>,</span>
        </p>
        <p styleName={'tab'}>
          <span styleName={'blue'}>skills: </span>
          <span>&#91;</span>
          <p styleName={'tab'}>
            {techList}
          </p>
          <span>&#93;</span>
        </p>
        <p>&#125;;</p>
      </div>
    </div>
  );
}
