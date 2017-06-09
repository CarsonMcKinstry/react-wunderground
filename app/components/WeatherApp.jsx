import * as React from "react";
import {connect} from 'react-redux';

import Weather from 'Weather';
import * as actions from 'actions';

export class WeatherApp extends React.Component {
  render() {
    let {dispatch} = this.props;
    dispatch(actions.startGetWeather());
    // let {loading} = this.props;
    // let weather = {
    //   location: this.props.location,
    //   weather: this.props.weather,
    //   tempF: this.props.temp_f,
    //   tempC: this.props.temp_c,
    // }
    // console.log(weather);
    return <Weather/>;
  }
}

export default connect()(WeatherApp);
