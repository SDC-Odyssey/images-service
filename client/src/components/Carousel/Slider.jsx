import React from 'react';
import { Container, OuterContainer, PhotoListContainer } from './style.Slider.jsx';
import Thumbnail from './Thumbnail.jsx';
import styled from 'styled-components';

const PhotoList = styled.ul`
position: relative !important;
list-style-type: none !important;
left: 0px !important;
margin: 0px !important;
padding: 0px !important;
transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s !important;
`;

const ShiftedSlider = styled(PhotoList)`
  transform: translateX(${(props) => { return props.transform; }}px);
`;

class Slider extends React.Component {
  //console.log('props in Slider: ', props); //photos, clickedPic, transform
  render() {
    const photoList = this.props.photos;
    const currentPhoto = this.props.clickedPic;
    const transform = this.props.transform;
    const currentPhotoIndex = photoList.indexOf(currentPhoto);
    if (currentPhotoIndex > 3) {
      return (
        <Container>
          <OuterContainer>
            <PhotoListContainer>
              <ShiftedSlider transform={transform}>
                {photoList.map((photo, index) => {
                  return <Thumbnail key={index} photo={photo} currentPhoto={currentPhoto} />;
                })}
              </ShiftedSlider>
            </PhotoListContainer>
          </OuterContainer>
        </Container>
      );
    }
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