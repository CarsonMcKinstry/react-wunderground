import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import * as actions from 'actions';

const store = require("configureStore").configure();

import WeatherApp from "WeatherApp";


store.dispatch(actions.setLoading());



$(document).foundation();

require("style!css!sass!applicationStyles");

ReactDOM.render(<Provider store={store}>
<WeatherApp /></Provider>, document.querySelector("#app"));
