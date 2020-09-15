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

//this is not working/styling
const ShiftedSlider = styled(PhotoList)`
  transform: translateX(${(props) => { return props.transform; }}px);
`;

class Slider extends React.Component {
  //console.log('props in Slider: ', props); //photos, clickedPic, transform
  render() {
    const photoList = this.props.photos;
    const currentPhoto = this.props.clickedPic;
    const transform = this.props.transform;
    // console.log('🧫 photoList: ', photoList);
    // console.log('🧿 currentPhoto: ', currentPhoto);
    // console.log('🧨 transform: ', transform);
    const currentPhotoIndex = photoList.indexOf(currentPhoto);
    //console.log('🧪 currentPhotoIndex: ', currentPhotoIndex);
    //if photoList.length is greater than 3, will need to reposition thumbnails to center
    if (photoList.length > 4) {
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