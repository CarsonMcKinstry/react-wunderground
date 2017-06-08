import * as $ from "jquery";
import axios from "axios";

const wundergroundKey = process.env.WUNDERGROUND_KEY;

const apiBase = `http://api.wunderground.com/api/${wundergroundKey}/conditions/q/`;

module.exports = {
  getWeather: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeather);
    } else {
    }

    function showWeather(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      axios.get(`${apiBase}${lat},${long}.json`).then(
        res => {
          return res.data.current_observations;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
