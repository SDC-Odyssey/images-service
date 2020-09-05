import React from 'react';
import axios from 'axios';
import PhotoGrid from './PhotoGrid.jsx';
//import PhotoCarousel from './PhotoCarousel.jsx';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      isSuperHost: false,
      hasLoaded: false,
      gridClicked: false,
      clickedPhoto: null
    }
    this.getPhotosByRoomId = this.getPhotosByRoomId.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let search = window.location.search;
    let roomId = Number(search.split('?').pop());
    console.log('roomId (not being used now): ', roomId);
    this.getPhotosByRoomId(roomId);
  }

  getPhotosByRoomId(id) {
    //console.log('id: ', id);
    axios.get(`http://localhost:3001/images/${id}`)
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
    e.prevent.default();
    this.setState({
      gridClicked: !this.state.gridClicked,
      clickedPhoto: e.target
    });
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
      }
      // return (
      //   <div className="photo-carousel">
      //     <PhotoCarousel photos={ this.state.photos } clickedPhoto={ this.state.clickedPhoto } handleClick={ this.handleClick } />
      //   </div>
      // );
    }
    return (
      <h3>Unique Glamping Experience</h3>
    );
  }
}

export default Images;