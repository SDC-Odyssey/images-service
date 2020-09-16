import React from 'react';
import { ListPhoto, ActivePhoto, ImageListButton, ImageListPhoto } from './style.THumbnail.jsx';

const Thumbnail = (props) => {
  //console.log('props in Thumbnail: ', props); //photo from list, currentPhoto
  if (props.photo === props.currentPhoto) {
    return (
      <ActivePhoto>
        <ImageListButton>
          <ImageListPhoto src={props.photo} />
        </ImageListButton>
      </ActivePhoto>
    );
  }
  return (
    <ListPhoto>
      <ImageListButton>
        <ImageListPhoto src={props.photo} />
      </ImageListButton>
    </ListPhoto>
  );
}


export default Thumbnail;