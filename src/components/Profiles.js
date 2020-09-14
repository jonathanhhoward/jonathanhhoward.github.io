import React from 'react';
import Profile from './Profile';
import profileList from './profileList';

function Profiles() {
  return (
      <div className="profiles">
        {profileList.map((profile, key) => <Profile key={key} {...profile}/>)}
      </div>
  );
}

export default Profiles;
