/**
 * Wrap our React.Element with Provider
 * create our store(@param reducers, applyMiddleware(@param saga))
 * saga.run(@param ourSagaConfiguration)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './assets/scss/main.scss'

import {Provider} from 'react-redux'
import {store} from './store'
import { setAxiosConfig } from './utils/helper';

setAxiosConfig()

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));