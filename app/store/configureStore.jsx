import * as redux from "redux";
import thunk from "redux-thunk";
import "reducers";

export const configure = (initialState = {}) => {
  let reducer = redux.combineReducers({});

  let store = redux.configureStore(
    reducer,
    initialState,
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : x => x
    )
  );

  return store;
};
