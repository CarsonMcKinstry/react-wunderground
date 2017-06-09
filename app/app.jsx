import * as React from "react";
import * as ReactDOM from "react-dom";

import * as actions from 'actions';

const store = require("configureStore").configure();

import WeatherApp from "WeatherApp";


store.dispatch(actions.setLoading());
store.dispatch(actions.startGetWeather());

$(document).foundation();

require("style!css!sass!applicationStyles");

ReactDOM.render(<WeatherApp />, document.querySelector("#app"));
