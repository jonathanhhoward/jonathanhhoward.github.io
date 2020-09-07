import React, {useState, useEffect} from 'react';
import Project from './Project';

function Showcase() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/project-list.json')
        .then(res => res.json())
        .then(setProjectList)
        .catch(console.error);
  }, []);

  return (
      <div className="showcase">
        {projectList.map((project, key) => <Project key={key} {...project}/>)}
      </div>
  );
}

export default Showcase;
