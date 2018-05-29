// don't need to use strict because webpack adds automatically

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render as reactDomRender } from 'react-dom';// destructuring importing just this one property and assigning it to reactDom...
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';// this is the component that will hold the store

import App from '../src/components/app/app';
import categoryReducer from './reducer/category-reducer';
import '../styles/main.scss';
// sectionsReducer is the crucial redux
// applymiddleware == for chrome devetools

// setting up store-------->
const middleware = {};
const store = createStore(
  categoryReducer, 
  composeWithDevTools(applyMiddleware(...middleware)),
);

// rendering the app--------->
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

reactDomRender(<Provider store = {store}><App /></Provider>, appContainer);// wrap the app in the provider
