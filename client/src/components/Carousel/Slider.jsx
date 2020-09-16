import React from 'react';
//import { Container, OuterContainer, PhotoListContainer } from './style.Slider.jsx';
import Thumbnail from './Thumbnail.jsx';
import styled from 'styled-components';

export const Container = styled.div`
  background-image: none !important;
  background-color: transparent !important;
  position: absolute !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  z-index: 2 !important;
  text-align: center !important;
  color: rgb(255,255,255) !important;
  overflow: hidden !important;
  border-radius: 0px !important;
  margin-bottom: 24px;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
`;

export const OuterContainer = styled.div`
  max-width: 94vh !important;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
  left: 24.5%;
  top: 85%;
`;

export const PhotoListContainer = styled.div`
  position: relative !important;
  width: 1110px !important;
  margin: 0 auto;
`;

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
    //console.log('🧪 currentPhotoIndex: ', currentPhotoIndex);
    //if photoList.length is greater than 3, will need extra photos coming into view
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