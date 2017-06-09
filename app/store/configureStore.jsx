import * as redux from "redux";
import thunk from "redux-thunk";
import {weatherReducer} from "reducers";

export const configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    weatherReducer: weatherReducer
  });

  let store = redux.createStore(
    reducer,
    initialState,
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : x => x
    )
  );

  return store;
};
