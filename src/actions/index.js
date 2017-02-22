import axios from 'axios';

const API_KEY = '417a4b28daf664d29af93f61f17af840';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
