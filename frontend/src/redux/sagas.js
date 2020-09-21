import { all } from "redux-saga/effects";

/**
 * App Imports
 */
import FamilySaga from './family/saga';

export default function* rootSaga() {
  yield all([FamilySaga()]);
}
