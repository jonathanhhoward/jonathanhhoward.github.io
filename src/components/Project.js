import React from 'react';

function Project({href, img, caption}) {
  return (
      <a href={href}>
        <figure className="tile">
          <img
              src={img.src}
              alt={img.alt}
          />
          <figcaption className="caption">
            {caption}
          </figcaption>
        </figure>
      </a>
  );
}

export default Project;
