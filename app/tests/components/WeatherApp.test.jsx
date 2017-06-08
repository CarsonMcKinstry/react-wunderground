import expect from "expect";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";

import { WeatherApp } from "WeatherApp";

describe("WeatherApp", () => {
  it("should exist", () => {
    expect(WeatherApp).toExist();
  });
});
