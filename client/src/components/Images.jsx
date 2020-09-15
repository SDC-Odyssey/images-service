import React from 'react';
import axios from 'axios';
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx';
import Carousel from './Carousel/Carousel.jsx';

//let serverUrl = 'http://ec2-3-137-156-133.us-east-2.compute.amazonaws.com';
let serverUrl = 'http://localhost:3001';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      isSuperHost: false,
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
        const roomPhotos = response.data[0].room_photos.slice();
        // const title = response.data[0].title.slice();
        // const host = response.data[0].is_super_host.slice();
        this.setState({
          //title: title,
          photos: roomPhotos,
          //isSuperHost: host,
          hasLoaded: true
        });
      })
      .catch((err) => {
        console.log('error getting photos by id from server: ', err);
      })
  }

  handleClick(e) {
    e.preventDefault();
    //console.log('💈e.target.src: ', e.target.src);
    this.setState({
      gridClicked: !this.state.gridClicked,
      clickedPic: e.target.src
    });
    //console.log('🇬🇧this.state.clickedPic in handleClick Images.jsx: ', this.state.clickedPic); null
  }

  render() {
    if (this.state.hasLoaded) {
      if (!this.state.gridClicked) {
        return (
          <div className="photo-gallery">
            <h3>Contemporary Cozy Home</h3>
              <PhotoGrid photos={ this.state.photos } onClick={this.handleClick} />
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
      <h3>Unique Glamping Experience</h3>
    );
  }
}

export default Images;