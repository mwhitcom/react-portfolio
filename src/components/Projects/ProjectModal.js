import React from 'react';
import Slider from 'react-slick';

import './ProjectModal.css';

export default function SingleProject(props) {
  const { codeName, link, about, tech, images } = props.project;
  const techLength = tech.length - 1;  
  const techList = tech.map((item, index) =>
    <span>
      <span styleName={'orange'}>'{item}'</span>
      <span>{index === techLength ? '' : ', '}</span>
    </span>
  );
  const carouselContent = images.map((image, index) => {
    return (
      <div>
        <img src={image} alt="Project" key={index} />
      </div>
    );
  });
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  
  return (
    <div styleName={'container'}>
      <div styleName={'image-container'}>
        <Slider {...settings}>
          {carouselContent}
        </Slider>
      </div>
      <div styleName={'info-container'}>
        <p>
          <span styleName={'light-blue'}>let </span>
          <span styleName={'blue'}>{codeName} </span>
          <span>= &#123;</span>
        </p>
        <p styleName={'tab space'}>
          <span styleName={'blue'}>link: </span>
          <span><a styleName={'project-link'} href={link} target="_blank">{link}</a></span>
          <span>,</span>
        </p>
        <p styleName={'tab space'}>
          <span styleName={'blue'}>about: </span>
          <span styleName={'orange'}>'{about}'</span>
          <span>,</span>
        </p>
        <p styleName={'tab'}>
          <span styleName={'blue'}>skills: </span>
          <span>&#91;</span> 
          {techList}
          <span>&#93;</span>
        </p>
        <p>&#125;;</p>
      </div>
    </div>
  );
}
