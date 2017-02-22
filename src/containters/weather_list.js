import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273); // ºC
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    const {lon, lat } = cityData.cityData.city.coord;

    return(
      <tr key={name}>
        <td width="25%"><GoogleMap lon={lon} lat={lat} /></td>
        <td width="25%"><Chart data={temps} color="orange" units="ºC"/></td>
        <td width="25%"><Chart data={pressures} color="green" units="hPa"/></td>
        <td width="25%"><Chart data={humidities} color="blue" units="%"/></td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(C)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather }; // === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
