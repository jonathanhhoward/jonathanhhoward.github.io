import React from 'react';
import Project from './Project';
import projectList from './projectList';

function Showcase() {
  return (
    <div className="showcase">
      {projectList.map((project, key) => (
        <Project key={key} {...project} />
      ))}
    </div>
  );
}

export default Showcase;
