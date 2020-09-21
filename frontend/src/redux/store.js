import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

/**
 * App Imports
 */
import createReducer from "./reducers";
import rootSaga from "./sagas";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(createReducer(), composeEnhancer(applyMiddleware(...middlewares)));

store.dispatch({ type: "RESET_AUTH_LOADER" });
sagaMiddleware.run(rootSaga);

export { store, history };