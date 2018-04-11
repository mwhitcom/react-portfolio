import React from 'react';
import './SingleProject.css';

export default function SingleProject(props) {
  return (
    <div styleName={'container'}>
      <img src={props.project.image_main} alt={props.project.name} />
      <div styleName={'project-label'}>
        <h1 styleName={'title'}>{props.project.name.toUpperCase()}</h1>
        <h2 styleName={'sub-headline'}>{props.project.sub}</h2>
        <button onClick={props.openModal}>LEARN MORE</button>
      </div>
    </div>
  );
}
