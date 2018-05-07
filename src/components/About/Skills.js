import React from 'react';

import './Skills.css';

export default function Skills(props) {
  const frontLength = props.skills.first.length - 1;
  const frontList = props.skills.first.map((skill, index) => 
    <p styleName={'tab'}>
      <span styleName={'orange'}>'{skill}'</span>
      <span>{index === frontLength ? '' : ','}</span>
    </p>
  );
  
  const backLength = props.skills.second.length - 1;  
  const backList = props.skills.second.map((skill, index) => 
    <p styleName={'tab'}>
      <span styleName={'orange'}>'{skill}'</span>
      <span>{index === backLength ? '' : ','}</span>
    </p>
  );

  return (
    <div styleName={'skills-container'}>
      <div styleName={'front-end-list'}>
        <p>
          <span styleName={'light-blue'}>let </span>
          <span styleName={'blue'}>skills </span>
          <span>= &#91;</span>
        </p>
        {frontList}
        <p>&#93;;</p>
      </div>
      <div styleName={'back-end-list'}>
        <p>
          <span styleName={'light-blue'}>let </span>
          <span styleName={'blue'}>skillsContinued </span>
          <span>= &#91;</span>
        </p>
        {backList}
        <p>&#93;;</p>
      </div>
    </div>
  );
}
