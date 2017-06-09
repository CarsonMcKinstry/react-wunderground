import axios from "axios";

const wundergroundKey = process.env.WUNDERGROUND_KEY;

const apiBase = `http://api.wunderground.com/api/${wundergroundKey}/conditions/q/`;

export const setLoading = () => {
  return {
    type: 'SET_LOADING'
  }
}

export const addWeather = (weather) => {
  return {
    type: 'ADD_WEATHER',
    weather
  }
}

export const startGetWeather = () => {
  return (dispatch, getState) => {
    if (navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      return axios.get(`${apiBase}${lat},${long}.json`).then((data) =>{
        let weatherInfo = data.data.current_observation;
        let weather = {
          location: weatherInfo.display_location.full,
          weather: weatherInfo.weather,
          temp_f: weatherInfo.temp_f,
          temp_c: weatherInfo.temp_c
        }

        dispatch(addWeather(weather));
      }, () => {

      });
    }));

  }
}