import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import * as reducers from "./modules";

const rootReducer = combineReducers(reducers);

const configure = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      initialState,
      applyMiddleware(/* other middleware, */ sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run
  };
};

export default configure;
