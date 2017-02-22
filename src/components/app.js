import React, { Component } from 'react';
import SearchBar from '../containters/search_bar';
import WeatherList from '../containters/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
