import React from 'react';

import './Skills.css';

export default function Skills(props) {
  const frontList = props.skills.frontEnd.map(front => 
    <p styleName={'tab'}>
      <span styleName={'orange'}>'{front}'</span>
      <span>,</span>
    </p>
  );
  const backList = props.skills.backEnd.map(back => 
    <p styleName={'tab'}>
      <span styleName={'orange'}>'{back}'</span>
      <span>,</span>
    </p>
  );

  return (
    <div styleName={'skills-container'}>
      <div styleName={'front-end-list'}>
        <p>
          <span styleName={'light-blue'}>let </span>
          <span styleName={'blue'}>frontEndSkills </span>
          <span>= &#91;</span>
        </p>
        {frontList}
        <p>&#93;;</p>
      </div>
      <div styleName={'back-end-list'}>
        <p>
          <span styleName={'light-blue'}>let </span>
          <span styleName={'blue'}>backEndSkills </span>
          <span>= &#91;</span>
        </p>
        {backList}
        <p>&#93;;</p>
      </div>
    </div>
  );
}
