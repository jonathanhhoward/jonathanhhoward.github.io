import React from 'react';

function Profile({href, src, alt}) {
  return (
      <a
          href={href}
          className="button"
      >
        <img
            src={src.wide}
            alt={alt}
            className="wide"
        />
        <img
            src={src.narrow}
            alt={alt}
            className="narrow"
        />
      </a>
  );
}

export default Profile;
