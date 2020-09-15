import React from 'react';
import { Container, OuterContainer, PhotoListContainer, PhotoList } from './style.Slider.jsx';
import Thumbnail from './Thumbnail.jsx';

class Slider extends React.Component {
  //console.log('props in Slider: ', props); //photos, clickedPic, transform
  render() {
    const photoList = this.props.photos;
    const currentPhoto = this.props.clickedPic;
    return (
      <Container>
        <OuterContainer>
          <PhotoListContainer>
            <PhotoList>
              {photoList.map((photo, index) => {
                  return <Thumbnail key={index} photo={photo} currentPhoto={currentPhoto} />;
              })}
            </PhotoList>
          </PhotoListContainer>
        </OuterContainer>
      </Container>
    );
  }
}

export default Slider;