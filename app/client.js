// Entry point for the browser
// Start your React application and add the required containers
// Here we have <BrowserRouter /> for react-router

import 'react-hot-loader';
import {rehydrateMarks} from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {moveStyles} from 'used-styles/moveStyles';
// import chunk definition
import './imported-chunk';

import App from './App';

// move SSR-ed styles to the head
moveStyles();

const element = document.getElementById('app');
const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

rehydrateMarks().then(() => {
    // In production, we want to hydrate instead of render
    // because of the server-rendering
    ReactDOM.hydrate(app, element);
});

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
