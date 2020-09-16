import React from 'react';
//import Fa from 'react-fontawesome';
import { Grid, MainPhoto, Img, GridPhoto2, GridPhoto3, GridPhoto4, GridPhoto5 } from './style.PhotoGrid';

const PhotoGrid = (props) => {
  //console.log('props in PhotoGrid: ', props); //props.photos[url, url, url] //props.onClick
  return (
    <Grid onClick={props.onClick}>
      <MainPhoto>
        <Img src={props.photos[0]} alt="main photo" />
      </MainPhoto>
        <GridPhoto2>
          <Img src={props.photos[1]} />
        </GridPhoto2>
        <GridPhoto3>
          <Img src={props.photos[2]} />
        </GridPhoto3>
        <GridPhoto4>
          <Img src={props.photos[3]} />
        </GridPhoto4>
        <GridPhoto5>
          <Img src={props.photos[4]} />
        </GridPhoto5>
    </Grid>
  );
};

export default PhotoGrid;