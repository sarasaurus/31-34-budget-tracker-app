import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render as reactDomRender } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from '../src/components/app/app';
// import categoryReducer from './components/redux/reducer/category-reducer';
import rootReducer from './components/redux/reducer/main-reducer';
import '../styles/main.scss';

// setting up store-------->
const middleware = {};
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(...middleware)),
);

// rendering the app--------->
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

reactDomRender(<Provider store = {store}><App /></Provider>, appContainer);// wrap the app in the provider
