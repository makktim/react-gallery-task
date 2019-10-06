import { createStore } from "redux";

import rootreducer from "../reducers";

const configureStore = () => {
    const store = createStore(
        rootreducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    return store;
};

export default configureStore;