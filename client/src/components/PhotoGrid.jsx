import React from 'react';
import Fa from 'react-fontawesome';

const PhotoGrid = (props) => {
  console.log('props in PhotoGrid: ', props); //props.photos[url, url, url]
  return (
    <div className="photo-grid">
      <div className="main-photo-wrapper">
        <img className="main-photo" src={props.photos[0]} alt="main photo" />
      </div>
        <div className="small-photos-wrapper">
          <img className="grid-photo-2" src={props.photos[1]} />
          <img className="grid-photo-3" src={props.photos[2]} />
          <img className="grid-photo-4" src={props.photos[3]} />
          <img className="grid-photo-5" src={props.photos[4]} />
        </div>
    </div>
  );
};

export default PhotoGrid;