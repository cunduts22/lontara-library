/**
 * Wrap our React.Element with Provider
 * create our store(@param reducers, applyMiddleware(@param saga))
 * saga.run(@param ourSagaConfiguration)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './assets/scss/main.scss'


ReactDOM.render(
    <App></App>
, document.getElementById('root'));