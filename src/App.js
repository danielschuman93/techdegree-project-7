//App dependencies
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
      figsPhotos: []
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

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=figs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          figsPhotos: response.data.photos.photo
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
            <Route exact path="/" render={ () => <Redirect to="/cats" /> } />
            <Route path="/search/:query" render={ () => <PhotoContainer data={this.state.photos} /> } />
            <Route path="/cats" render={ () => <PhotoContainer data={this.state.catsPhotos} /> } />
            <Route path="/dogs" render={ () => <PhotoContainer data={this.state.dogsPhotos} /> } />
            <Route path="/figs" render={ () => <PhotoContainer data={this.state.figsPhotos} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  } 
}

export default App;