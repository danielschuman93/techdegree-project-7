//App dependencies
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
//App Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      catsPhotos: [],
      dogsPhotos: [],
      computersPhotos: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          catsPhotos: response.data.photos.photo
        })
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogsPhotos: response.data.photos.photo
        })
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          computersPhotos: response.data.photos.photo
        })
      });
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        })
      });
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            {/* <Route path="/" render={ () => <PhotoContainer data={this.state.photos} /> } /> */}
            <Route path="/cats" render={ () => <PhotoContainer data={this.state.catsPhotos} /> } />
            <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogsPhotos} /> } />
            <Route path="/computers" render={ () => <PhotoContainer data={this.state.computersPhotos} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  } 
}

export default App;