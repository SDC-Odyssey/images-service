import React from 'react';
import axios from 'axios';
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx';
import Carousel from './Carousel/Carousel.jsx';
import Description from './Description/Description.jsx';

//let serverUrl = 'http://ec2-3-21-170-25.us-east-2.compute.amazonaws.com';
let serverUrl = 'http://localhost:3001';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      isSuperHost: false,
      rating: 4,
      reviewCount: 0,
      hasLoaded: false,
      gridClicked: false,
      clickedPic: null
    }
    this.getPhotosByRoomId = this.getPhotosByRoomId.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let search = window.location.search;
    let roomId = Number(search.split('?').pop());
    console.log('roomId: ', roomId);
    this.getPhotosByRoomId(roomId);
  }

  getPhotosByRoomId(id) {
    //console.log('id: ', id);
    axios.get(`${serverUrl}/images/${id}`)
      .then((response) => {
        console.log('images data by room id: ', response.data);
        const roomPhotos = response.data[0].room_photos;
        const title = response.data[0].title;
        const host = response.data[0].is_super_host;
        const rating = response.data[0].rating;
        const reviewCount = response.data[0].review_count;
        this.setState({
          title: title,
          photos: roomPhotos,
          rating: rating,
          reviewCount: reviewCount,
          isSuperHost: host,
          hasLoaded: true
        });
      })
      .catch((err) => {
        console.log('error getting photos by id from server: ', err);
      })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      gridClicked: !this.state.gridClicked,
      clickedPic: e.target.src
    });
  }

  render() {
    const mainDivStyle = {
      padding: '24px 0 0 0',
      textAlign: 'left',
    };
    if (this.state.hasLoaded) {
      if (!this.state.gridClicked) {
        return (
          <div style={mainDivStyle}>
            <h3 className="property-title">{ this.state.title }</h3>
            <div className="description">
              <Description isSuperHost={ this.state.isSuperHost } rating={ this.state.rating } reviewCount={ this.state.reviewCount } />
            </div>
            <div className="photo-gallery">
              <PhotoGrid photos={ this.state.photos } onClick={this.handleClick} />
            </div>
          </div>
        );
      } else {
        return (
          <div className="photo-carousel">
            <Carousel photos={ this.state.photos } clickedPic={ this.state.clickedPic } handleClick={this.handleClick} />
          </div>
        );
      }
    }
    return (
      <div>
        <h3>Unique Glamping Experience</h3>
      </div>
    );
  }
}

export default Images;