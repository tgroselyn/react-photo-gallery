import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {

  state = {
    gallery: []
  }

  componentDidMount = () => {
    console.log('App mounted');
    //call GET request to refresh data
    this.getGallery();
  } //end componentDidMount

  addImage = (newImage) => {
    console.log('in addImage');
    //axios POST to server at /gallery
    Axios.post('/gallery', newImage)
    .then(response => {
      //call GET request to refresh data
      this.getGallery();
    })
    .catch(error => {
      console.log(error);
    })
  } //end addImage

  deleteImage = (idToDelete) => {
    console.log('in deleteImage')
    //axios DELETE from server at /gallery/:id
    Axios.delete(`/gallery/${idToDelete}`)
    .then(response => {
      //call GET request to refresh data
      this.getGallery();
    })
    .catch(error => {
      console.log(error);
    })
  } //end deleteImage

  getGallery = () => {
    console.log('in getGallery');
    //axios GET from server at /gallery
    Axios.get('/gallery')
    .then(response => {
      //store response data in App state
      this.setState({
        gallery : response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  } //end getGallery

  updateLikes = (itemId) => {
    console.log('in updateLikes');
    //axios PUT to server at /gallery/like/:id
    Axios.put(`/gallery/like/${itemId}`)
    .then(response => {
      //call GET request to refresh data
      this.getGallery();
    })
    .catch(error => {
      console.log(error);
    })
  } //end updateLikes

  render() {

    //test log - what's in this.state.gallery?
    console.log(this.state.gallery);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
          <h2>- Thomas Roselyn -</h2>
        </header>
        <main>
          <GalleryForm 
            addImage={this.addImage}
          />
          <GalleryList
            gallery={this.state.gallery}
            updateLikes={this.updateLikes}
            deleteImage={this.deleteImage}
          />
        </main>
      </div>
    );
  }
} //end render

export default App;
