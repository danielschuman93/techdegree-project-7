import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './config';

const App = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;