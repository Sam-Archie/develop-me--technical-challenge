import { createStore, compose } from "redux";
import initial from "./initial";
import reducer from "./reducers";

import persistState from "redux-localstorage";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancers(persistState())
);

export default store;
