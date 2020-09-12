import React from 'react';
import { Container, Button, CloseButton, CloseSvg, Frame, TableRow, HeaderDiv, ArrowAndImageContainer, LeftArrowButton, RightArrowButton, PreviousSvg, NextSvg, CurrentPhotoFrame, CurrentPhoto } from './style.Carousel';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in carousel: ', props);
    this.state = {
      photos: this.props.photos,
      clickedPic: this.props.clickedPic,
      transform: 0
    };
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.leftArrowClick = this.leftArrowClick.bind(this);
  }

  rightArrowClick(e) {
    e.preventDefault();
    const { photos, clickedPic, transform } = this.state;
    const nextImagePosition = photos.indexOf({ clickedPic }.clickedPic) + 1;
    const nextImage = photos[nextImagePosition];
    let transformed;
    if (nextImage !== undefined) {
      transformed = transform - 110;
      this.setState({ clickedPic: nextImage, transform: transformed });
    } else {
      transformed = 280;
      this.setState({ clickedPic: photos[0], transform: transformed });
    }
  }

  leftArrowClick(e) {
    e.preventDefault();
    const { photos, clickedPic, transform } = this.state;
    const previousImagePosition = { photos }.photos.indexOf({ clickedPic }.clickedPic) - 1;
    const previousImage = { photos }.photos[previousImagePosition];
    const imagesListLength = { photos }.photos.length;
    let transformed;
    if (previousImage !== undefined) {
      transformed = transform + 110;
      this.setState({ clickedPic: previousImage, transform: transformed });
    } else {
      transformed = (photos.length * -110) + 380;
      this.setState({
        clickedPic: { photos }.photos[imagesListLength - 1],
        transform: transformed,
      });
    }
  }

  render() {
    return (
      <Container>
        <CloseButton>
          <Button>
            <CloseSvg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" onClick={this.props.handleClick}>
              <path d="m23.25 24c-.19   0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
            </CloseSvg>
          </Button>
        </CloseButton>
        <Frame>
          <TableRow>
            <HeaderDiv />
          </TableRow>
          <TableRow>
            <ArrowAndImageContainer>
              <LeftArrowButton aria-label="Previous">
                <PreviousSvg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" onClick={this.leftArrowClick}>
                  <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
                </PreviousSvg>
              </LeftArrowButton>
              <RightArrowButton>
                <NextSvg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" onClick={this.rightArrowClick}>
                  <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
                </NextSvg>
              </RightArrowButton>
            </ArrowAndImageContainer>
            <CurrentPhotoFrame>
              <CurrentPhoto src={this.state.clickedPic} alt="clicked photo" />
            </CurrentPhotoFrame>
          </TableRow>
        </Frame>
      </Container>
    );
  }
}

export default Carousel;