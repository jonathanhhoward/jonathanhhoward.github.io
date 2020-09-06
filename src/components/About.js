import React from 'react';
import profileSelfie from '../images/profile-selfie.jpg';

function About() {
  return (
      <div className="about">
        <img src={profileSelfie} alt="profile selfie"/>
        <h1>Jonathan Howard</h1>
        <p>Software Developer</p>
      </div>
  );
}

export default About;
