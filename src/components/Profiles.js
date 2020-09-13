import React from 'react';
import githubLogo from '../images/GitHub_Logo.png'
import githubMark from '../images/GitHub-Mark-64px.png'
import fccLogo from '../images/fcc_secondary_large.png'
import fccMark from '../images/fcc_secondary_small.png'
import liLogo from '../images/LI-Logo_b&w.png'
import liMark from '../images/LI-In-Bug_b&w.png'

function Profiles() {
  return (
      <div className="profiles">
        <a
            href="https://github.com/jonathanhhoward"
            className="button"
        >
          <img
              src={githubLogo}
              alt="github profile"
              className="wide"
          />
          <img
              src={githubMark}
              alt="github profile"
              className="narrow"
          />
        </a>
        <a
            href="https://www.freecodecamp.org/jonathanhoward"
            className="button"
        >
          <img
              src={fccLogo}
              alt="freecodecamp profile"
              className="wide"
          />
          <img
              src={fccMark}
              alt="freecodecamp profile"
              className="narrow"
          />
        </a>
        <a
            href="https://linkedin.com/in/jonathanhhoward"
            className="button"
        >
          <img
              src={liLogo}
              alt="linkedin profile"
              className="wide"
          />
          <img
              src={liMark}
              alt="linkedin profile"
              className="narrow"
          />
        </a>
      </div>
  );
}

export default Profiles;
