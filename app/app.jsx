import * as React from "react";
import * as ReactDOM from "react-dom";

import WeatherApp from "WeatherApp";

const store = require("configureStore").configure();

$(document).foundation();

require("style!css!sass!applicationStyles");

ReactDOM.render(<WeatherApp />, document.querySelector("#app"));
