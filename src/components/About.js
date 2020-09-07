import React from 'react';
import selfPortrait from '../images/self-portrait.jpg';

function About() {
  return (
      <div className="about">
        <img src={selfPortrait} alt="profile selfie"/>
        <h1>Jonathan Howard</h1>
        <p>Software Developer</p>
      </div>
  );
}

export default About;
