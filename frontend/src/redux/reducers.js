import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

/**
 * App Imports
 */
import FamilyReducer from './family/reducer';
import ModelReducer from './model/reducer';

const createReducer = () => combineReducers({
  model: ModelReducer,
  family: FamilyReducer,
  router: routerReducer,
});

export default createReducer;
