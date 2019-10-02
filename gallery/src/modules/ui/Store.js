import {createStore, applyMiddleware, MiddlewareAPI as store} from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers/PerformerListReducer";
import mySaga from "./Sagas";


const sagaMiddleware = createSagaMiddleware();
console.log("store");

export default createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(mySaga);