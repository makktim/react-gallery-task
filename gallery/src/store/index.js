import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../sagas'

import rootreducer from "../reducers";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleWare();
    const store = createStore(
        rootreducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;