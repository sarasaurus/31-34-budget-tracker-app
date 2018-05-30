import { combineReducers } from "redux";
import * as categoryReducer from './category-reducer';
import * as cardReducer from './card-reducer';

// this is like a bundler for our reducers
const emptyState = []; // do we need this here?

export default combineReducers(() => {

})