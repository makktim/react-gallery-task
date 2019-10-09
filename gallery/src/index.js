import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';

import configureStore from "./store";

const store = configureStore();


ReactDOM.render((
    <Provider store={store}>
        <Fragment>
            <App/>
        </Fragment>
    </Provider>
), document.getElementById('root'));